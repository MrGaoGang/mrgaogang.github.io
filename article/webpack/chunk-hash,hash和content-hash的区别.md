**hash**
> **跟整个项目的构建相关，构建生成的文件hash值都是一样的，只要项目里有文件更改，整个项目构建的hash值都会更改**。

**chunkhash**
> 采用hash计算的话，每一次构建后生成的哈希值都不一样，即使文件内容压根没有改变。这样子是没办法实现缓存效果，我们需要换另一种哈希值计算方式，即chunkhash。
> chunkhash和hash不一样，**它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值**。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，
> 接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。

**contenthash**
> 在chunkhash的例子，我们可以看到由于index.css被index.js引用了，所以共用相同的chunkhash值。但是这样子有个问题，如果index.js更改了代码，css文件就算内容没有任何改变，
> 由于是该模块发生了改变，导致css文件会重复构建。这个时候，我们可以使用extra-text-webpack-plugin里的contenthash值，
> 保证即使css文件所处的模块里就算其他文件内容改变，只要css文件内容不变，那么不会重复构建。(**只要文件内容不改变，就不会重构**)




- 参考
[webpack中的hash、chunkhash、contenthash区别](https://juejin.im/post/5a4502be6fb9a0450d1162ed)
