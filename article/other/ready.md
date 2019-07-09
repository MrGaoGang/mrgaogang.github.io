## webpack打包优化

### 一、如何优化构建速度

1. **缩小文件搜索范围**
    - 合理配置resolve.extensions[];
    - module.noParse[]字段告诉webpack不解析那些模块;
    - 配置loader的时候使用include，exclude缩小搜索范围

2. **使用DllPlugin减少基础模块编译次数**
3. **开启多线程进行Loader转换**
4. **使用webpack的externals配合html引入js减少打包**




### 二、如何优化打包质量

1. **压缩文件体积**
    - **压缩JS,CSS**（使用webpack4内置的UglifyJSPlugin和mini-css-extract-plugin/ExtractTextPlugin）
    - 剔除无用代码(webpack4默认支持);
    - **babel-polyfill按需加载**
        - babel6解决方案：使用transform-runtime，但是会存在重复引用问题
        - babel7解决方案：引入@babel/polyfill，使用"@babel/preset-env"设置useBuiltIns按需加载 babel.config.js


2. **加速网络请求**
    - **图片压缩**(较小图片使用base64)
    - **使用CDN加速**
        - html不缓存，js和css/img放在cdn中
        - js/css 使用chunkhash命名
        - 不同的资源放在不同的cdn中
    - **代码分割，组件按需加载**(常常配合@babel/plugin-syntax-dynamic-import使用)

### 三、用户体验优化
1. 添加Skeleton或者Loading



## 常见的内存泄漏情况

- 大量使用全局变量，且没有清理机制；
- 生产环境使用console.log、error输出对象
- dom的内存泄漏，常常大量对dom进行增加删除操作，若在删除时没有将对应dom对象置空，可能会操作全局对象引用；
```
    var refA = document.getElementById('refA');
    var refB = document.getElementById('refB');
    document.body.removeChild(refA);

    // #refA不能GC回收，因为存在变量refA对它的引用。将其对#refA引用释放，但还是无法回收#refA。
    refA = null;

    // 还存在变量refB对#refA的间接引用(refB引用了#refB，而#refB属于#refA)。将变量refB对#refB的引用释放，#refA就可以被GC回收。
    refB = null;
```
- 定时器：setTimeout和setInternal
> setInternal没有在关闭是使用clearInternal

- 不断对组件进行匿名事件绑定
> 解决办法：将匿名事件函数换成命名事件函数；**学会解除事件绑定的习惯**
```
    var resizeCallback = function (init) {
      createHtml(10, ++counter);
      // 事件委托
      container.addEventListener('click', function (event){//匿名函数
        var target = event.target;
          if(target.tagName === 'INPUT'){
              container.removeChild(target.parentElement)
          }
      }, false);
    }
    window.addEventListener('resize', resizeCallback, false);
```

## JavaScript优化
- **减少dom操作**
    - 结果统一保存，一并输出
    - 使用DocumentFragment文档片段
    ```
    node2fragment(node) {
    let fragment = document.createDocumentFragment()
    // 把el中所有的子节点挨个添加到文档片段中
    let childNodes = node.childNodes
    // 由于childNodes是一个类数组,所以我们要把它转化成为一个数组,以使用forEach方法
    this.toArray(childNodes).forEach(node => {
        // 把所有的字节点添加到fragment中
        fragment.appendChild(node)
    })
    return fragment
    }
    ```

- **事件委托**
```
window.onload = function(){
	var oUl = document.getElementById("ul1");
		oUl.onclick = function(ev){
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		if(target.nodeName.toLowerCase() == 'li'){
		    alert(123);
		　　alert(target.innerHTML);
	    }
	}
}
```
- **避免使用构造器**
    > eval('1+2')

- **使用Object/Array直接量**

```

//bad
var myObject = new Object();
myObject.name = "xxxx";

//good
var myObject = {
    name: "xxxx"
}
```

### 重绘和回流
- **重绘的情况**
    - 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，

- **回流的情况**
    - 页面初次渲染
    - 浏览器窗口大小改变
    - 元素尺寸、位置、内容发生改变
    - 元素字体大小变化
    - 添加或者删除可见的 dom 元素
    - 激活 CSS 伪类（例如：:hover）
    - 查询某些属性或调用某些方法
    clientWidth、clientHeight、clientTop、clientLeft
    offsetWidth、offsetHeight、offsetTop、offsetLeft
    scrollWidth、scrollHeight、scrollTop、scrollLeft
    getComputedStyle()
    getBoundingClientRect()
    scrollTo()
