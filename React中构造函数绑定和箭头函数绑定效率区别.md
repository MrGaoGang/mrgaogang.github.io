**提问：react项目中的JSX里，在constructor中使用this.func=this.func.bind(this)的写法，为什么要比非bind的func = () => {}的写法效率高？**


**使用构造函数绑定例子**

```js
class Test extends Component {
  constrcutor() {
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    console.log(this)
  }

  render() {
    return <Button onClick={this.handleClick}>测试</Button>
  }
}
```

**使用箭头函数方式**

```js
class Test extends Component {
  handleClick = () => {
    console.log(this)
  }
  
  render() {
    return <button onClick={this.handleClick}>测试</button>
  }
}

```

使用箭头函数方式比构造函数绑定方式的优点：
- 不需要手动编写bind函数，减少代码量;


**为何构造函数绑定方式性能要高呢？**

首先看一下bind的polyfill：

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {//oThis为需要绑定的对象也就是上例中的{a:20}
    // this为上例中的bFun，要求必须为函数类型
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    //将bind函数传入的参数从第1个(index从0开始)开始转换成数组，因为第0个为传入的绑定对象。arguments为类数组
    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
          // 由于使用new 方式创建的对象，this指向为对象的实例，此处判断如果使用new方式创建那么this应该为对象实例的this
          // 否则使用上下文绑定为传入的对象
          return fToBind.apply(this instanceof fBound
                 ? this
                 : oThis,
                 // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
                 // 函数的参数：应该为bind时传入的参数+调用生成的函数时传入的参数和
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // 维护原型关系
    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype; 
    }
    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();

    return fBound;
  };
}
```
**原因**

- **通过在构造器中使用bind绑定函数以后，所生成的实例中，都会有一个独立的fBound，函数体相对于待绑定的函数较小，而每个实例中的fBound在被调用时都会共享待绑定的函数handleClick**.也就是说：`使用构造器bind的方法，每个实例都可以有效地共享函数体，从而更加有效的使用内存`。

- 然后使用箭头方式绑定，所生成的实例中都有一个单独的handleClick

**二者使用场景**

- 当函数不做复杂逻辑处理，使用构造函数绑定和箭头函数方式绑定区别不大；
- 当实例数量比较少或者需要绑定的函数较少情况；使用箭头函数更容易理解；
- 实例数量比较多或者函数有复杂逻辑处理，请使用构造函数绑定方式。

盗用[Demystifying Memory Usage using ES6 React Classes](https://medium.com/dailyjs/demystifying-memory-usage-using-es6-react-classes-d9d904bc4557)中的两张区别图。


**箭头函数方式：每个实例都会创建一个新的handler函数**

![](https://miro.medium.com/max/1050/1*leLj2bFa6x_FBcevgdnQBw.png)


**构造函数方式：每个实例会创建一个较小的函数(也就是bind中返回的fBound)，并复用handler函数**

![](https://miro.medium.com/max/1050/1*tx-jKwnNs-24oP70I3nD8A.png)
