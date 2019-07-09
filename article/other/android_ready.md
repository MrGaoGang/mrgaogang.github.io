




## Android性能优化

### 性能优化

#### 1、内存泄漏

1. **单例模式引用Activity导致内存泄漏**
> 单例的生命周期，是整个应用程序的长度。单例模式使用activity的context，若activity退出则可能会造成内存泄漏；
> 解决办法：建议使用生命周期较长的context:applicationContext


2. **内部类造成的泄漏**
> 非静态内部类持有外部类的引用，可能外部类退出没有将内部类实例置空，导致内存泄漏。

> 解决办法：在onDestroy方法中收到将内部类实例置空，或者将内部类换成静态内部类。


3. **匿名内部类导致内存泄漏**
> 匿名内部类同样会持有一个外部类的引用，如果在activity销毁之后内部类还没执行完成，则任然会造成内存泄漏。

> 解决办法：在onDesctroy中中断内部类。如果是线程的话可以使用线程池。

4. **Handler导致内存泄漏**
> 假若在onCreate中发送一个请求，返回时在handler中处理，但是在正要处理时activity被销毁，那么在handler中的activity对象将会无效。

> 解决办法：使用静态内部类+弱引用(WeakRefrence)+关闭时移除所有消息和Runnable方式。


5. **监听器导致内存泄漏**

> 比较常见的是注册了广播，但是忘记销毁了。（activity注册一些服务，在activity销毁是忘记取消注册）；还有就是android动画忘记关闭导致。

> 解决办法：在activity中取消服务的注册；和关闭动画

6. **Service可能产生内存泄漏**
> 系统会倾向于将service所依赖的进程保留，如果这个进程比较耗内存，那么就可能造成内存泄漏。

> 解决办法：使用Intentservice，他会在后来任务结束时自动执行，从而避免service停止失败导致泄漏。


7. **优化bitmap避免内存泄漏**
> 在Listview和recyclerview中可能会有大量的图片，那么需要对图片进行加工处理来避免泄漏；

> 解决办法：图片质量压缩，图片尺寸剪裁，


8. **数据库游标忘记关闭造成泄漏**


### 稳定性优化
- 提高后台进程存活率
- Java层级的Crash监控：自定义UnCaughtException
- 使用腾讯的Bugly和网易云捕

### 存储优化
- SQLite优化
    - 使用SQLiteStatement提高插入数据的效率;
    - 使用事务(beginTransaction(),setTransationSuccessful()，endTransaction());
    - 使用索引


- SharedPreferences
    - 将SP作为耗时操作对待，尽量减少无谓的调用；
    - 对SP进行封装，减少直接调用，防止KEY耦合。


### 绘制优化
1. 启动优化
    - 启动耗时检测（使用代码打点）；
    - UI布局优化：减少UI层级，避免过度绘制（使用手机端Profile GPR Rendering和AS端Hierarchy View）;
    - 启动加载逻辑优化：分步加载，异步加载，延时加载

2. 布局优化
    - 减少层级
    - Merge使用
    - 使用ViewStub
    - 布局复用使用include
3. 绘制优化
    - 移除XML中必须的背景；
    - 移除Window的默认背景；
    - 按需显示占位背景图片；
    - 自定义View时避免重复绘制
