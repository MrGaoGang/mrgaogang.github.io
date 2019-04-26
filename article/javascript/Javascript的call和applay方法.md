>在JavaScript中call、apply、bind是Function 对象自带的三个方法，这三个方法的主要作用是改变函数中的 this 指向，从而可以达到`接花移木`的效果。

一个例子：

```
//有刀没肉
function peopleOne(name,name2){
    var knife="西瓜刀";
    console.log(name,name2,"使用",knife,"切",this.meat);
};
//有肉，没刀
var peo={
    meat:"五花肉"
};
//让peopleOne的上下文对象为peo，这样peo就可以调用peopleOne()方法使用刀去切肉了
peopleOne.call(peo,'mrgao','mrwho'); //mrgao mrwho 使用 西瓜刀 吃 五花肉

peopleOne.apply(peo,['mrgao','mrwho']); //mrgao mrwho 使用 西瓜刀 吃 五花肉

```
**call()和apply()的作用是:**
> **借别人的方法(刀)吃自己的肉**。：允许在一个对象（a）上调用该对象没有定义的方法(b)，并且这个方法(b)中可以访问该对象(a)中的属性。

> 其中call()和apply()的不同点为：入参的方式不同，call接受多个参数，而apply接收两个参数，其中第二个参数为一个数组列表


### call/apply方法第一个参数解释:借肉的人，

> 不传，或者传null,undefined， 函数中的 this 指向 window 对象，传递另一个函数的函数名，函数中的 this 指向这个函数的引用，传递字符串、数值或布尔类型等基础类型，函数中的 this 指向其对应的包装对象，如 String、Number、Boolean，传递一个对象，函数中的 this 指向这个对象。



### call/apply的使用场景

1、继承
```

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
//Food使用了Product方法，这样Product中的上下文为Food，
//所以Food会添加name和price属性
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// 结果: "cheese"

```

2、借刀切肉/移花接木

参考：[深入理解call、apply、bind（改变函数中的this指向）](https://blog.csdn.net/zhouzuoluo/article/details/84935106)

>在javascript中有很多类数组对象；，这些对象像数组一样存储着每一个元素，但它没有操作数组的方法，而我们可以通过call 将数组的某些方法`移接`到ArrayLike 对象，从而达到操作其元素的目的

```js
      function test(){
         console.log(typeof(arguments));     //输出Object ，arguments
 
         //检测arguments是否是Array的实例
         console.log(arguments instanceof Array);  //输出 false
         console.log(Array.isArray(arguments));    //输出 false
 
         //判断arguments是否有forEach的方法
         console.log(arguments.forEach);        //输出 undefined
 
         //将数组中的forEach方法应用到arguments上
         Array.prototype.forEach.call(arguments,
            function(item){console.log(item);  //输出 1 2 3 4 5
         });
         
         //因为forEach的入参为一个函数，所以第二个参数应该为一个函数
      }
      test(1,2,3,4,5);


```

### 文章参考
- [深入理解call、apply、bind（改变函数中的this指向）](https://blog.csdn.net/zhouzuoluo/article/details/84935106)
 
 - [
详解call()，apply()和bind()](https://blog.csdn.net/u014267183/article/details/52610600)

- [官方地址MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
