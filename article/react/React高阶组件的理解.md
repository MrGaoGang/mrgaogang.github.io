## 一、概念

> 高阶组件：通过包裹（wrapped）被传入的 React 组件，经过一系列处理，最终返回一个相对增强（enhanced）的 React 组件，供其他组件调用。

**为啥使用高阶组件**

> 做为一个高阶组件，可以在原有组件的基础上，对其增加新的功能和行为。我们一般希望编写的组件尽量纯净或者说其中的业务逻辑尽量单一。但是如果各种组件间又需要增加新功能，如打印日志，获取数据和校验数据等和展示无关的逻辑的时候，这些公共的代码就会被重复写很多遍。因此，我们可以抽象出一个高阶组件，用以给基础的组件增加这些功能，类似于插件的效果

**高阶组件常用用途**

- 代码复用：这是高阶组件最基本的功能。组件是 React 中最小单元，两个相似度很高的组件通过将组件重复部分抽取出来，再通过高阶组件扩展，增删改 props，可达到组件可复用的目的；
- 条件渲染：控制组件的渲染逻辑，常见 case：鉴权，添加 Loading；
- 生命周期捕获/劫持：借助父组件子组件生命周期规则捕获子组件的生命周期，常见 case：日志及性能打点。

## 二、实现高阶组件的方式

### 1. 属性代理

属性代理的方式常用的用途有：

- 操作 props
- 获取 refs 引用
- 抽象 state
- 添加额外的组件

#### 操作 props

一个简单的例子:

```js
import React, { Component } from "React";
//高阶组件定义
const HOC = WrappedComponent =>
  class WrapperComponent extends Component {
    render() {
      let newProps = {
        name: "mrgao"
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
//普通的组件
class WrappedComponent extends Component {
  render() {
    //....
  }
}

//高阶组件使用
export default HOC(WrappedComponent);
```

高阶组件 HOC 返回了一个新的组件 WrapperComponent，我们可以在 WrapperComponent 中对传入组件的 props 进行增加，删除和修改。从而改变传入组件的 props。

#### 获取 refs 引用

```js
import React, { Component } from "React";
const HOC = WrappedComponent =>
  class WrapperComponent extends Component {
    storeRef(ref) {
      this.ref = ref;
    }
    render() {
      return (
        <WrappedComponent {...this.props} ref={this.storeRef.bind(this)} />
      );
    }
  };
```

将 this.props 传入，`refs 将不会透传下去。这是因为 ref 不是 prop 属性`。就像 key 一样，其被 React 进行了特殊处理;

#### 抽象 state

属性代理的情况下，我们可以将被包裹组件(WrappedComponent)中的状态提到包裹组件中，一个常见的例子就是实现不受控组件到受控的组件的转变

```js
class WrappedComponent extends Component {
  render() {
    return <input name="name" {...this.props.name} />;
  }
}

const HOC = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ""
      };

      this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(event) {
      this.setState({
        name: event.target.value
      });
    }

    render() {
      //通过props传递给WrappedComponent组件，并将state提升到高阶组件统一处理
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onNameChange
        }
      };
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
```

现实情况我们可能有对不受控组件的操作，如果每一次都去编写对应的代码，会造成大量的臃肿且不利于维护，若我们把对不受控组件的操作挡在高阶组件中统一处理，只需要在 WrappedComponent 组件的 state 提升到高阶组件，统一处理即可。

#### 用其他元素包裹组件

```js
export default function HOC(WrappedComponent) {
  return class WrapperComponent extends Component {
    render() {
      return (
        <div className="total_class">
          <div>这是额外加的一些元素，可以来实现布局或者是样式的目的。</div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
```

### 2. 反向继承

反向继承是指返回的组件去继承之前的组件。

> 反向继承允许高阶组件通过 `this` 关键词获取 WrappedComponent，意味着它可以获取到 state，props，组件生命周期（component lifecycle）钩子，以及渲染方法（render）。

```js
const HOC = WrappedComponent =>
  class extends WrappedComponent {
    render() {
      return super.render();
    }
  };
```

#### 渲染劫持

> 渲染劫持是指我们可以有意识地控制 WrappedComponent 的渲染过程，从而控制渲染控制的结果

通过渲染劫持你可以：

- 『读取、添加、修改、删除』任何一个将被渲染的 React Element 的 props
- 在渲染方法中读取或更改 React Elements tree，也就是 WrappedComponent 的 children
- 根据条件不同，选择性的渲染子树
- 给子树里的元素变更样式

**选择性渲染**

```js
const HOC = WrappedComponent =>
  class extends WrappedComponent {
    render() {
      if (this.props.isRender) {
        return super.render();
      } else {
        return null;
      }
    }
  };
```

**更改渲染结果**

```js
//例子来源于《深入React技术栈》

const HOC = WrappedComponent =>
  class extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      let newProps = {};
      if (elementsTree && elementsTree.type === "input") {
        newProps = { value: "may the force be with you" };
      }
      const props = Object.assign({}, elementsTree.props, newProps);
      const newElementsTree = React.cloneElement(
        elementsTree,
        props,
        elementsTree.props.children
      );
      return newElementsTree;
    }
  };
class WrappedComponent extends Component {
  render() {
    return <input value={"Hello World"} />;
  }
}
export default HOC(WrappedComponent);
//实际显示的效果是input的值为"may the force be with you"
```

#### 操作 props 和 state

> 高阶组件可以 『读取、修改、删除』WrappedComponent 实例的 state，如果需要也可以添加新的 state。需要记住的是，你在弄乱 WrappedComponent 的 state，可能会导致破坏一些东西。`通常不建议修改props和state`

例子：通过显示 WrappedComponent 的 props 和 state 来 debug:

```js
export function HOC(WrappedComponent) {
  return class WrapperComponent extends WrappedComponent {
    render() {
      return (
        <div>
          <h2>HOC Debugger Component</h2>
          <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
          <p>State</p>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          {super.render()}
        </div>
      );
    }
  };
}
```

#### 反向继承的限制

反向继承的高阶组件`不能保证一定渲染整个子元素树`，这同时也给渲染劫持增添了一些限制。通过反向继承，`你只能劫持 WrappedComponent 渲染的元素`，这意味着`如果 WrappedComponent 的子元素里有 Function 类型的 React Element，你不能劫持这个元素里面的子元素树的渲染`。

## 三、装饰器 Decorator

**修饰器（Decorator）是一个函数，用来修改类的行为**

在很多框架和库中看到它的身影，尤其是 React 和 Redux，还有 mobx 中;

### 1. 安装

如果要使用装饰器：请安装`npm install @babel/plugin-proposal-decorators`

然后在`.babelrc`文件中添加：

```js
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ]
}

```

### 2. Decorator 对类的修饰

#### 基本使用

```js
//定义一个函数，也就是定义一个Decorator，target参数就是传进来的Class。
//这里是为类添加了一个静态属性
function addAge(target) {
  target.age = 2;
}

//在Decorator后面跟着Class，Decorator是函数的话，怎么不是addAge(Person)这样写呢？
//我只能这样理解：因为语法就这样，只要Decorator后面是Class，默认就已经把Class当成参数隐形传进Decorator了(就是所谓的语法糖)。
@addAge
class Person {}

console.log(Person.age); // 2
```

#### 传递参数

有时候我们需要给函数传递参数，那么咋办呢？这是就需要使用到[函数柯里化](https://mrgaogang.github.io/article/javascript/Javascript%E6%9F%AF%E9%87%8C%E5%8C%96%E5%92%8C%E5%81%8F%E5%87%BD%E6%95%B0%E5%AE%9E%E7%8E%B0.html)了

```js
function addAge(age) {
  return function(target) {
    target.age = age;
  };
}

//注意这里，隐形传入了Class，语法类似于addAge(2)(Person)
@testable(2)
class Person {}
Person.age; // 2

@addAge(3)
class Person {}
Person.age; // 3
```

#### 修改类的属性

```js
function changeURL(target) {
  target.prototype.url = "http://aaaaa.com";
}
@changeURL
class MyProject {}

let project = new MyProject();
project.url; // http://aaaaa.com
```

### 3. Decorator 对属性的修饰

```js
//假如修饰类的属性则传入三个参数，对应Object.defineProperty()里三个参数，具体不细说
//target为目标对象，对应为Class的实例
//name为所要修饰的属性名，这里就是修饰器紧跟其后的name属性
//descriptor为该属性的描述对象
//这里的Decorator作用是使name属性不可写，并返回修改后的descriptor
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Person {
  @readonly
  name() {
    return `${this.first} ${this.last}`;
  }
}
```

## React 高阶组件使用 Decorator

这里拿属性代理方式实现高阶组件举例。

### 1. 基本使用

```js
function HOC(WrappedComponent){
    return class WrapperComponent extends React.Compoenet{
        render(){
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
}

class WrappedComponent extends React.Component{
 render(){
     return(
         <div>你好，世界</div>
     )
 }
}

//之前使用的方式是

export default HOC(WrappedComponent);

//那么现在使用装饰器的方式为

@HOC
export default class WrappedComponent extends React.Component{
 render(){
     return(
         <div>你好，世界</div>
     )
 }
}

```

### 2. 利用函数柯里化传递参数

给 React 组件传递参数和普通的类传递参数类似，都是利用函数柯里化的原则。

```js

function HOC(url){
    return function(WrappedComponent){
        return class WrapperComponent extends React.Component {
        render(){
            return (
                <WrappedComponent {...this.props} {url} />
            )
        }
    }
    }
}
//使用es6箭头函数方式更加简洁
function HOC(url)=>(WrappedComponent)=>class WrapperComponent extends React.Component {
        render(){
            return (
                <WrappedComponent {...this.props} {url} />
            )
        }
    }

//使用的时候

@HOC("mrgao.github.io")
export default class WrappedComponent extends React.Component{
 render(){
     return(
         <div>你好，世界{this.url}</div>
     )
 }
}
```


### 3. 组合多个高阶组件

之前都是在一个组件上使用一个装饰器来使用高阶组件，那么如果存在多个高阶组件呢？例如我既需要增加一个组件标题，又需要在此组件未加载完成时显示Loading。

```js
function withDescription(desc)=>(WrappedComponent)=>class WrapperComponent extends Component{
    render(){
        return (
            <WrappedComponent {...this.props} {desc}/>
        )
    }
}
//withLoading我就不写了

@withDescription("我是描述")
@withLoading("我是Loading")
class Demo extends Component{

}


```

上面这样做着实是可以使用多个高阶组件，但是会造成装饰器过多的情况。这是就`需要将函数铺平`。常见的将函数铺平的方法就是Redux中对多个中间件的铺平处理。
[源码](https://github.com/reduxjs/redux/blob/master/src/compose.js)
```js
//compose.js源码如下：主要思想是使用reduce将多个函数铺平为一个函数

export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

```
这个时候再React中使用多个高阶组件时就可这样使用了:


```js
let enhance =compose(withDescription("我是描述"),withLoading("我是Loading"))

@enhance
class Demo extends Component{

}

```

**注意**

> compose将多个函数铺平为一个函数，其调用的方式为`compose(funcA, funcB, funcC) 其实为 compose(funcA(funcB(funcC())))；`所以**一定要注意传入高阶组件的顺序**

## 参考

- [学习 es7 的 Decorator](https://juejin.im/post/5bd177e3e51d457ab36d00a7#heading-3)
- [React 高阶组件(HOC)入门指南](https://juejin.im/post/5914fb4a0ce4630069d1f3f6#heading-0)

- [React 高阶组件实践](https://juejin.im/post/59b36b416fb9a00a636a207e)
- [React 中的五种组件形式](https://juejin.im/post/59eb26e951882578c6738fb0)
