(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{793:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"懒加载原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载原理"}},[t._v("#")]),t._v(" 懒加载原理")]),t._v(" "),a("h2",{attrs:{id:"懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),a("h3",{attrs:{id:"什么是懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是懒加载"}},[t._v("#")]),t._v(" 什么是懒加载")]),t._v(" "),a("blockquote",[a("p",[t._v("懒加载其实就是延迟加载，是一种对网页性能优化的方式，比如当访问一个页面的时候，优先显示可视区域的图片而不一次性加载所有图片，当需要显示的时候再发送图片请求，避免打开网页时加载过多资源。")])]),t._v(" "),a("h3",{attrs:{id:"什么时候用懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么时候用懒加载"}},[t._v("#")]),t._v(" 什么时候用懒加载")]),t._v(" "),a("p",[t._v("当页面中需要一次性载入很多图片的时候，往往都是需要用懒加载的。")]),t._v(" "),a("h3",{attrs:{id:"懒加载原理-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载原理-2"}},[t._v("#")]),t._v(" 懒加载原理")]),t._v(" "),a("p",[t._v("我们都知道 HTML 中的"),a("code",[t._v("<img>")]),t._v("标签是代表文档中的一个图像。。说了个废话。。\n"),a("code",[t._v("<img>")]),t._v("标签有一个属性是 src，用来表示图像的 URL，当这个属性的值不为空时，浏览器就会根据这个值发送请求。如果没有 src 属性，就不会发送请求。")]),t._v(" "),a("p",[t._v("嗯？貌似这点可以利用一下？")]),t._v(" "),a("p",[t._v("我先不设置 src，需要的时候再设置？")]),t._v(" "),a("p",[t._v("nice，就是这样。\n我们先不给"),a("code",[t._v("<img>")]),t._v("设置 src，把图片真正的 URL 放在另一个属性 data-src 中，在需要的时候也就是图片进入可视区域的之前，将 URL 取出放到 src 中。")]),t._v(" "),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("h3",{attrs:{id:"html-结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-结构"}},[t._v("#")]),t._v(" HTML 结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div class="container">\n  <div class="img-area">\n    <img class="my-photo" alt="loading" data-src="./img/img1.png">\n  </div>\n  <div class="img-area">\n    <img class="my-photo" alt="loading" data-src="./img/img2.png">\n  </div>\n  <div class="img-area">\n    <img class="my-photo" alt="loading" data-src="./img/img3.png">\n  </div>\n  <div class="img-area">\n    <img class="my-photo" alt="loading" data-src="./img/img4.png">\n  </div>\n  <div class="img-area">\n    <img class="my-photo" alt="loading" data-src="./img/img5.png">\n  </div>\n</div>\n')])])]),a("p",[t._v("仔细观察一下，"),a("img"),t._v("标签此时是没有 src 属性的，只有 alt 和 data-src 属性。\nalt 属性是一个必需的属性，它规定在图像无法显示时的替代文本。\ndata-* 全局属性：构成一类名称为自定义数据属性的属性，可以通过 HTMLElement.dataset 来访问。")]),t._v(" "),a("h3",{attrs:{id:"如何判断元素是否在可视区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何判断元素是否在可视区域"}},[t._v("#")]),t._v(" 如何判断元素是否在可视区域")]),t._v(" "),a("h4",{attrs:{id:"方法一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[t._v("#")]),t._v(" 方法一")]),t._v(" "),a("p",[t._v("网上看到好多这种方法，稍微记录一下。")]),t._v(" "),a("ul",[a("li",[t._v("通过"),a("code",[t._v("document.documentElement.clientHeight")]),t._v("获取屏幕可视窗口高度")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("element.offsetTop")]),t._v("获取元素相对于文档顶部的距离")]),t._v(" "),a("li",[t._v("通过"),a("code",[t._v("document.documentElement.scrollTop")]),t._v("获取浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离\n然后判断 ②-③<① 是否成立，如果成立，元素就在可视区域内。")])]),t._v(" "),a("h4",{attrs:{id:"方法二-getboundingclientrect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-getboundingclientrect"}},[t._v("#")]),t._v(" 方法二 getBoundingClientRect")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("getBoundingClientRect()")]),t._v("方法来获取元素的大小以及位置，MDN 上是这样描述的：")]),t._v(" "),a("blockquote",[a("p",[t._v("The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.\n这个方法返回一个名为 ClientRect 的 DOMRect 对象，包含了 top、right、botton、left、width、height 这些值。")])]),t._v(" "),a("p",[t._v("MDN 上有这样一张图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/9/27/7224dffcfc513a5a10c5b165d649213c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("p",[t._v("可以看出返回的元素位置是相对于左上角而言的，而不是边距。\n我们思考一下，什么情况下图片进入可视区域。")]),t._v(" "),a("p",[t._v("假设"),a("code",[t._v("const bound = el.getBoundingClientRect()")]),t._v(";来表示图片到可视区域顶部距离；\n并设 "),a("code",[t._v("const clientHeight = window.innerHeight")]),t._v(";来表示可视区域的高度。")]),t._v(" "),a("p",[t._v("随着滚动条的向下滚动，"),a("code",[t._v("bound.top")]),t._v(" 会越来越小，也就是图片到可视区域顶部的距离越来越小，当 "),a("code",[t._v("bound.top===clientHeight")]),t._v(" 时，图片的上沿应该是位于可视区域下沿的位置的临界点，再滚动一点点，图片就会进入可视区域。\n也就是说，在 "),a("code",[t._v("bound.top<=clientHeight")]),t._v(" 时，图片是在可视区域内的。\n我们这样判断：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInSight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bound "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" clientHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果只考虑向下滚动加载")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//const clientWidth = window.innerWeight;")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" bound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" clientHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里有个+100 是为了提前加载。")]),t._v(" "),a("h3",{attrs:{id:"加载图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载图片"}},[t._v("#")]),t._v(" 加载图片")]),t._v(" "),a("p",[t._v("页面打开时需要对所有图片进行检查，是否在可视区域内，如果是就加载。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkImgs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imgs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".my-photo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isInSight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里应该是有一个优化的地方，设一个标识符标识已经加载图片的 "),a("code",[t._v("index")]),t._v("，当滚动条滚动时就不需要遍历所有的图片，只需要遍历未加载的图片即可。\n函数节流")]),t._v(" "),a("p",[t._v("在类似于滚动条滚动等频繁的 DOM 操作时，总会提到“函数节流、函数去抖”。\n所谓的函数节流，也就是让一个函数不要执行的太频繁，减少一些过快的调用来节流。")]),t._v(" "),a("p",[t._v("基本步骤：")]),t._v(" "),a("ul",[a("li",[t._v("获取第一次触发事件的时间戳")]),t._v(" "),a("li",[t._v("获取第二次触发事件的时间戳")]),t._v(" "),a("li",[t._v("时间差如果大于某个阈值就执行事件，然后重置第一个时间")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("throttle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mustRun "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" previous "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      previous "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" remaining "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mustRun "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" remaining "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" mustRun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      previous "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里的 "),a("code",[t._v("mustRun")]),t._v(" 就是调用函数的时间间隔，无论多么频繁的调用 fn，只有 "),a("code",[t._v("remaining>=mustRun")]),t._v(" 时 "),a("code",[t._v("fn")]),t._v(" 才能被执行。\n实验")]),t._v(" "),a("h4",{attrs:{id:"页面打开时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面打开时"}},[t._v("#")]),t._v(" 页面打开时")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/9/27/bdcce5b702a176f5008b37db0aa554e4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),t._v("\n可以看出此时仅仅是加载了 img1 和 img2，其它的 img 都没发送请求，看看此时的浏览器\n"),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/9/27/3989dd285f802a91da731a11be51ac51?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}}),t._v("\n第一张图片是完整的呈现了，第二张图片刚进入可视区域，后面的就看不到了~")]),t._v(" "),a("h4",{attrs:{id:"页面滚动时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面滚动时"}},[t._v("#")]),t._v(" 页面滚动时")]),t._v(" "),a("p",[t._v("当我向下滚动，此时浏览器是这样")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/9/27/194b9f87d333733b70d71b37fb6b1c09?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("p",[t._v("此时第二张图片完全显示了，而第三张图片显示了一点点，这时候我们看看请求情况")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/9/27/f7323b55b7c6161d76dbf03df530d432?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("p",[t._v("img3 的请求发出来，而后面的请求还是没发出~")]),t._v(" "),a("h4",{attrs:{id:"全部载入时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全部载入时"}},[t._v("#")]),t._v(" 全部载入时")]),t._v(" "),a("p",[t._v("当滚动条滚到最底下时，全部请求都应该是发出的，如图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/9/27/c18376e5599a321bb9dd97af1eaa4e53?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:""}})]),t._v(" "),a("p",[t._v("完整 demo\n在这哦："),a("a",{attrs:{href:"http://axuebin.com/lazyload",target:"_blank",rel:"noopener noreferrer"}},[t._v("axuebin.com/lazyload"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),a("h3",{attrs:{id:"方法三-intersectionobserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法三-intersectionobserver"}},[t._v("#")]),t._v(" 方法三 IntersectionObserver")]),t._v(" "),a("p",[t._v("经大佬提醒，发现了这个方法\n先附上链接：\njjc 大大："),a("a",{attrs:{href:"https://github.com/justjavac/the-front-end-knowledge-you-may-dont-know/issues/10",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/justjavac/t…"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("阮一峰大大："),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.ruanyifeng.com/blog/2016/1…"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/WICG/IntersectionObserver",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Sketch for Intersection Observers：github.com/WICG/Inters…"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("IntersectionObserver")]),t._v(" 可以自动观察元素是否在视口内。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" io "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntersectionObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始观察")]),t._v("\nio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止观察")]),t._v("\nio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unobserve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭观察器")]),t._v("\nio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disconnect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("callback")]),t._v(" 的参数是一个数组，每个数组都是一个 "),a("code",[t._v("IntersectionObserverEntry")]),t._v(" 对象，包括以下属性：")]),t._v(" "),a("ul",[a("li",[t._v("time 可见性发生变化的时间，单位为毫秒")]),t._v(" "),a("li",[t._v("rootBounds 与 getBoundingClientRect()方法的返回值一样")]),t._v(" "),a("li",[t._v("boundingClientRect 目标元素的矩形区域的信息")]),t._v(" "),a("li",[t._v("intersectionRect 目标元素与视口（或根元素）的交叉区域的信息")]),t._v(" "),a("li",[t._v("intersectionRatio 目标元素的可见比例，即 intersectionRect 占 boundingClientRect 的比例，完全可见时为 1，完全不可见时小于等于 0")]),t._v(" "),a("li",[t._v("target 被观察的目标元素，是一个 DOM 节点对象")])]),t._v(" "),a("p",[t._v("我们需要用到 "),a("code",[t._v("intersectionRatio")]),t._v(" 来判断是否在可视区域内，当 "),a("code",[t._v("intersectionRatio > 0 && intersectionRatio <= 1")]),t._v(" 即在可视区域内。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkImgs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imgs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".my-photo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  imgs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" io "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntersectionObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ioes")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ioes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ioe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ioe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" intersectionRatio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ioe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("intersectionRatio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intersectionRatio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" intersectionRatio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unobserve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);