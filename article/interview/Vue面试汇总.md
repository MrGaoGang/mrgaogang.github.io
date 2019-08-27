


### vue的data属性为何为一个函数？

> **重复创建实例造成多实例共享一个数据对象**;vue文件经过babel编译，将导出的对象直接替换成了一个对象变量，然后将这个变量传入到对应的组件构造函数中。因此，也就产生了引用共享的问题(所有js对象皆引用)

- 每个组件都是 Vue 的实例。
- 组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变其中一个会影响其他。

### vue组件通信有哪些方式？
- props和$emit
- $emit和$on
- vuex
- 中央事件总线
- provide和inject
- $attr和$listener

[Vue 组件间通信六种方式（完整版）](https://juejin.im/post/5cde0b43f265da03867e78d3#heading-11)

### vue插槽了解吗？
- 编译作用域:
> 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

- 具名插槽
> v-slot 只能添加在一个 \<template> 上 (只有一种例外情况);\<template> 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 v-slot 的 \<template> 中的内容都会被视为默认插槽的内容。

> 具名插槽缩写：即把参数之前的所有内容 (v-slot:) 替换为字符 #。例如 v-slot:header 可以被重写为 #header：如果你希望使用缩写的话，你必须始终以明确插槽名取而代之：
```js
<current-user #default="{ user }">
  {{ user.firstName }}
</current-user>
```
- 作用域插槽
> 有时让插槽内容能够访问子组件中才有的数据是很有用的。

### Vue的slot和slot-scope
- slot具名插槽
- slot-scope: 这个的作用，主要就是当向组件发送的内容需要和组件的props属性的内容有联系时，才使用这个作用域插槽。简单点来说就是：可以使用 子组件的数据 和 父组件传过来的props的值。


### vue混入策略
1.  data对象在内部会进行递归合并，并在发生冲突时以组件数据优先。

2. 同名钩子（生命周期）函数将合并为一个数组，因此都将被调用。另外，**混入对象的钩子将在组件自身钩子之前调用**。

3. 值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

>注意：Vue.extend() 也使用同样的策略进行合并。



### vue的extends和mixin有什么区别？
> 其实两个都可以理解为继承，mixins接收对象数组（可理解为多继承），extends接收的是对象或函数（可理解为单继承）。

> 优先调用mixins和extends继承的父类，**extends触发的优先级更高**，相对于是队列push(extend, mixin1, minxin2, 本身的钩子函数)

### Vue diff算法
- [详解vue的diff算法](https://juejin.im/post/5affd01551882542c83301da)
- [Vue2.6.0 diff源码](https://github.com/vuejs/vue/blob/2.6/src/core/vdom/patch.js)


### computed和watch有什么区别?

- [computed和watch有什么区别?](https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-10)

### Vue computed 实现
- [Vue 源码](https://github.com/vuejs/vue/blob/2.6/src/core/instance/state.js)

大致思路：
- 初始化 data， 使用 Object.defineProperty 把这些属性全部转为 getter/setter。
- 初始化 computed, 遍历 computed 里的每个属性，每个 computed 属性都是一个 watch 实例。·每个属性提供的函数作为属性的 getter·，使用 Object.defineProperty 转化。
- Object.defineProperty getter 依赖收集。用于依赖发生变化时，触发属性重新计算。
- 若出现当前 computed 计算属性嵌套其他 computed 计算属性时，先进行其他的依赖收集。


### Vue是如何实现双向绑定的?
- [Vue是如何实现双向绑定的?](https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-11)

### Proxy比defineproperty优劣对比?

- [参考:Proxy比defineproperty优劣对比?](https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-12)

- [Proxy的13种拦截操作](http://es6.ruanyifeng.com/#docs/proxy)


### 虚拟DOM实现原理?
- [面试官: 你对虚拟DOM原理的理解?](https://user-gold-cdn.xitu.io/2019/8/1/16c49afec13e0416)


### 既然Vue通过数据劫持可以精准探测数据变化,为什么还需要虚拟DOM进行diff检测差异?

- [既然Vue通过数据劫持可以精准探测数据变化,为什么还需要虚拟DOM进行diff检测差异?](https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-16)



### Vue为什么没有类似于React中shouldComponentUpdate的生命周期？
- [Vue为什么没有类似于React中shouldComponentUpdate的生命周期？](https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-17)


### Vue中的key到底有什么用？

- [Vue中的key到底有什么用？](https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-18)



### 服务端渲染VS客户端渲染
- [服务端渲染VS客户端渲染](https://jkchao.cn/article/5a11155fb520d115154c8fa1)

**题目来源**
- [面试必备的13道可以举一反三的Vue面试题](https://juejin.im/post/5d41eec26fb9a06ae439d29f#heading-4)
