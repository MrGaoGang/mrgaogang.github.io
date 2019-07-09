
### 基础知识
- http
    - 三次握手和四次挥手
    - 常见的http状态码(101,200,201,202,301,302,400,401,403,404,408,409,500,501,503);
    - 常见的http头部
    - request头部（请求行/请求头/空行/请求体）
    - response头部（响应行/响应头/空行/响应体）
    - 常见的请求方法
    - https工作原理
    - http和https的区别
- cookie和session
- for in 和for of的区别
- instanceof 和typeof的区别
- grid布局了解吗

---- 
### CSS
- css3有哪些新特性？
- 怎样形成BFC？

----

### Javascript
- 跨越问题
- 原型及原型链
- 微任务与宏任务
- 防抖和节流
- 重绘和回流
    - 引起回流有哪些情况?
- 了解XSS和CSRF吗
- 模块化发展简史知道吗？
- 常用Javascript的那些设计模式？
    - 单例设计模式
    - 工厂设计模式
    - 适配器设计模式
    - 发布订阅模式
    - 代理设计模式
    - 策略设计模式
----


### Vue
- vue的data属性为何为一个函数？

- vue组件通信有哪些方式？
    - props和$emit
    - \$emit和$on
    - vuex
    - 中央事件总线
    - provide和inject
    - \$attr和$listener
    - $parent,$children和ref

- vue插槽了解吗？

- vue混入mixin策略？

- vue的extends和mixin有什么区别？

- 


- vue组件扩展
    - 混入mixin
    - 自定义指令
    - 插件

- Vue diff算法
- Vue和React的区别
- 介绍一下Vuex和Redux，Mobx


----
### 前端性能优化
- webpack打包如何优化？
    - 如何提高构建速度？
    - 如何提高程序质量？
- 你遇过内存泄漏问题吗?

 
----
### Android相关
- Android生命周期

- **Android跨进程通信的几种方式**
    - **Intent方式**
    ```
    如调用系统通话应用
    Intent callIntent=new Intent(Intent.ACTION_CALL,Uri.parse("tel:12345678");
    startActivity(callIntent);
    ```
    - **Content Provider**
    ```
    ContentProvider（内容提供者）是Android中的四大组件之一。主要用于对外共享数据，也就是通过ContentProvider把应用中的数据共享给其他应用访问，其他应用可以通过ContentProvider对指定应用中的数据进行操作。ContentProvider分为系统的和自定义的，系统的也就是例如联系人，图片等数据。
    ```
    - **广播（Broadcast）**

    - **AIDL（安卓接口定义语言）服务**


    - **Messager通信**

| 名称 | 优点 | 缺点 | 适用场景
| ---- | ---- | ---- | ---- |
| Bundle | 简单易用 | 只能传输Bundle支持的数据类型 | 四大组件之间的进程通信
| 文件共享 | 简单易用 | 不适合高并发的情况，并且无法做到进程间的即时通信 | 无并发访问的情形，简单交换的数据实时性不高的场景
| AIDL | 功能强大，支持一对多并发通信，只是实时通信 | 使用较为复杂，需要处理好线程同步 | 一对多通信且有RPC的需求
| Messenger | 支持一对多的串行通信，支持实时通信 |不能很好处理高并发的情形，不支持RPC，数据通过Message进行传输，因此只能传输Bundle支持的数据类型 | 低并发的一对多即使通信，无RPC需求。
| ContentProvider  |在数据源方法比较强大。支持一对多的高并发数据共享|  可以理解为受约束的AIDL | 一对多的进程间的数据共享
| Socket | 功能强大，可以通过网络传输字节流，只是一对多并发实时通信 | 实现起来有点麻烦 | 网络数据交换

- **Webview了解多少？**
    - Android通过webview调用js
        - 通过Webview的loadUrl();
        - 通过WebView的evaluateJavascript()

    - js通过webview调研Android
        - 通过WebView的addJavascriptInterface（）进行对象映射
        - 通过 WebViewClient 的shouldOverrideUrlLoading ()方法回调拦截 url
        - 通过 WebChromeClient 的onJsAlert()、onJsConfirm()、onJsPrompt（）方法回调拦截JS对话框alert()、confirm()、prompt（） 消息




- **Android的四种启动模式**:
    - Standard:每次启动activity都会创建一个新的实例入栈，无论实例是否存储
    - SingleTop：若栈顶存在当前实例，则直接复用
    - SingleInstance：全局只有一个activity实例
    - SingleTask：若当前栈中存在activity实例，则弹出activity上面的实例，将当前实例置顶。

- **自定义View的步骤**
    - 基于View的自定义
    - 基于ViewGroup的自定义
    - 基于已有组件的自定义

- **MVP设计模式和MVVM设计模式(ViewModel+Lifecycle+LiveData)**
- **线程池**
    - FixThreadPool:固定数量的核心线程，
    - SingleThreadPool:只有一个核心线程，确保所有任务都在同一线程中按顺完成。
    - CachedThreadPool: 只有非核心线程，所有都活动时会为新任务创建新线程。
    - ScheduledThreadPool: 核心线程数固定，非核心线程数没有限制，主要用于执行定时任务以及有固定周期的重复任务。
- **Android性能优化**
    - 安装包大小优化
    - 耗电优化
    - 稳定性优化
    - 存储优化
    - 绘制优化
    - 内存泄漏

- **Android组件化和插件化**
    - ARouter和VirtualApk

### 其他知识
- nginx反向代理
- 介绍一下BFF
- Restful接口
- Docker了解吗
