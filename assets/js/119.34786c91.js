(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{759:function(t,e,a){"use strict";a.r(e);var v=a(18),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http缓存详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http缓存详解"}},[t._v("#")]),t._v(" Http缓存详解")]),t._v(" "),a("blockquote",[a("p",[t._v("http 缓存主要针如 css，js，图片等更新频率不大的静态文件。")])]),t._v(" "),a("p",[t._v("阅读本文可以了解到：")]),t._v(" "),a("ul",[a("li",[t._v("强缓存和协商缓存")]),t._v(" "),a("li",[t._v("缓存头部优先级")]),t._v(" "),a("li",[t._v("http 缓存")]),t._v(" "),a("li",[t._v("http 缓存方案")]),t._v(" "),a("li",[t._v("浏览器刷新对缓存的影响")])]),t._v(" "),a("p",[t._v("http 缓存大致分为两种: "),a("code",[t._v("强缓存")]),t._v("和"),a("code",[t._v("协商缓存")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"一、强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、强缓存"}},[t._v("#")]),t._v(" 一、强缓存")]),t._v(" "),a("blockquote",[a("p",[t._v("通过特殊的 HTTP"),a("code",[t._v("Cache-Control")]),t._v("首部和"),a("code",[t._v("Expries")]),t._v("首部,HTTP 让原始服务器向每个文档附加了一个过期日期,这些首部说明了在多长时间内可以将这些内容视为新鲜的。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("强缓存：不会向服务器发送请求，直接从缓存中读取资源，在 chrome 控制台的 Network 选项中可以看到该请求返回"),a("strong",[t._v("200")]),t._v("的状态码，并且 Size 显示 from disk cache 或 from memory cache。强缓存可以通过设置两种 HTTP Header 实现："),a("strong",[t._v("Expires")]),t._v(" 和 "),a("strong",[t._v("Cache-Control")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" "),a("code",[t._v("Cache-control")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("指令")]),t._v(" "),a("th",[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("public")]),t._v(" "),a("td",[a("strong",[t._v("所有内容都将被缓存")]),t._v("（客户端和代理服务器都可缓存）")])]),t._v(" "),a("tr",[a("td",[t._v("private")]),t._v(" "),a("td",[a("strong",[t._v("所有内容只有客户端可以缓存")]),t._v("，Cache-Control 的默认取值。具体来说，表示中间节点不允许缓存，对于 Browser <-- proxy1 <-- proxy2 <-- Server，proxy 会老老实实把 Server 返回的数据发送给 proxy1,自己不缓存任何数据。当下次 Browser 再次请求时 proxy 会做好请求转发而不是自作主张给自己缓存的数据")])]),t._v(" "),a("tr",[a("td",[t._v("no-cache")]),t._v(" "),a("td",[t._v("客户端缓存内容，是否使用缓存则"),a("strong",[t._v("需要经过协商缓存来验证")]),t._v("决定。表示不使用 Cache-Control 的缓存控制方式做前置验证，而是使用 Etag 或者 Last-Modified 字段来控制缓存。"),a("strong",[t._v("需要注意的是，no-cache 这个名字有一点误导。设置了 no-cache 之后，并不是说浏览器就不再缓存数据，只是浏览器在使用缓存数据时，需要先确认一下数据是否还跟服务器保持一致")]),t._v("。")])]),t._v(" "),a("tr",[a("td",[t._v("no-store")]),t._v(" "),a("td",[t._v("所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存")])]),t._v(" "),a("tr",[a("td",[t._v("max-age")]),t._v(" "),a("td",[t._v("max-age=xxx (xxx is numeric)表示缓存内容将在 xxx 秒后失效")])]),t._v(" "),a("tr",[a("td",[t._v("s-maxage（单位为 s)")]),t._v(" "),a("td",[t._v("同 max-age 作用一样，只在代理服务器中生效（比如 CDN 缓存）。比如当 s-maxage=60 时，在这 60 秒中，即使更新了 CDN 的内容，浏览器也不会进行请求。"),a("strong",[t._v("max-age 用于普通缓存，而 s-maxage 用于代理缓存。s-maxage 的优先级高于 max-age")]),t._v("。如果存在 s-maxage，则会覆盖掉 max-age 和 Expires header")])]),t._v(" "),a("tr",[a("td",[t._v("max-stale")]),t._v(" "),a("td",[t._v("能容忍的最大过期时间。max-stale 指令标示了客户端愿意接收一个已经过期了的响应。如果指定了 max-stale 的值，则最大容忍时间为对应的秒数。如果没有指定，那么说明浏览器愿意接收任何 age 的响应（age 表示响应由源站生成或确认的时间与当前时间的差值）")])])])]),t._v(" "),a("h3",{attrs:{id:"expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" "),a("code",[t._v("Expires")])]),t._v(" "),a("blockquote",[a("p",[t._v("缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。也就是说，"),a("code",[t._v("Expires=max-age + 请求时间")]),t._v("，需要和"),a("code",[t._v("Last-modified")]),t._v("结合使用。Expires 是 Web 服务器响应消息头字段，在响应 http 请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。\nExpires 是 HTTP/1 的产物，受限于本地时间，如果修改了本地时间，可能会造成缓存失效。Expires: Wed, 22 Oct 2018 08:41:00 GMT 表示资源会在 Wed, 22 Oct 2018 08:41:00 GMT 后过期，需要再次请求。")])]),t._v(" "),a("h3",{attrs:{id:"expires-和-cache-control-两者对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires-和-cache-control-两者对比"}},[t._v("#")]),t._v(" Expires 和 Cache-Control 两者对比")]),t._v(" "),a("p",[t._v("其实这两者差别不大，区别就在于 Expires 是 http1.0 的产物，Cache-Control 是 http1.1 的产物，两者同时存在的话，"),a("strong",[t._v("Cache-Control 优先级高于 Expires")]),t._v("；在某些不支持 HTTP1.1 的环境下，Expires 就会发挥用处。所以 Expires 其实是过时的产物，现阶段它的存在只是一种兼容性的写法。\n强缓存判断是否缓存的依据来自于是否超出某个时间或者某个时间段，而不关心服务器端文件是否已经更新，这可能会导致加载文件不是服务器端最新的内容，那我们如何获知服")]),t._v(" "),a("h2",{attrs:{id:"二、协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、协商缓存"}},[t._v("#")]),t._v(" 二、协商缓存")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("协商缓存生效，返回 304 和 Not Modified")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/20/1637d0bbd6cd702d~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:""}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("协商缓存失效，返回 200 和请求结果")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/20/1637d0bbda96ac60~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:""}})]),t._v(" "),a("p",[t._v("协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag 。")]),t._v(" "),a("h3",{attrs:{id:"_1-last-modified-和-if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-last-modified-和-if-modified-since"}},[t._v("#")]),t._v(" 1.Last-Modified 和 If-Modified-Since")]),t._v(" "),a("p",[t._v("浏览器在第一次访问资源时，服务器返回资源的同时，在 response header 中添加 Last-Modified 的 header，值是这个资源在服务器上的最后修改时间，浏览器接收后缓存文件和 header；")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Last-Modified: Fri, 22 Jul 2016 01:47:00 GMT\n\n")])])]),a("p",[t._v("浏览器下一次请求这个资源，浏览器检测到有 Last-Modified 这个 header，于是添加 If-Modified-Since 这个 header，值就是 Last-Modified 中的值；服务器再次收到这个资源请求，会根据 If-Modified-Since 中的值与服务器中这个资源的最后修改时间对比，如果没有变化，返回 304 和空的响应体，直接从缓存读取，如果 If-Modified-Since 的时间小于服务器中这个资源的最后修改时间，说明文件有更新，于是返回新的资源文件和 200")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/4/16814782b5e34670~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"但是-last-modified-存在一些弊端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#但是-last-modified-存在一些弊端"}},[t._v("#")]),t._v(" 但是 Last-Modified 存在一些弊端：")]),t._v(" "),a("ul",[a("li",[t._v("如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 Last-Modified 被修改，服务端不能命中缓存导致发送相同的资源")]),t._v(" "),a("li",[t._v("因为 Last-Modified 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源")])]),t._v(" "),a("p",[t._v("既然根据文件修改时间来决定是否缓存尚有不足，能否可以直接根据文件内容是否修改来决定缓存策略？所以在 HTTP / 1.1 出现了 "),a("code",[t._v("ETag")]),t._v(" 和"),a("code",[t._v("If-None-Match")])]),t._v(" "),a("h3",{attrs:{id:"_2-etag-和-if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-etag-和-if-none-match"}},[t._v("#")]),t._v(" 2.ETag 和 If-None-Match")]),t._v(" "),a("p",[a("strong",[t._v("Etag 是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)，只要资源有变化，Etag 就会重新生成")]),t._v("。浏览器在下一次加载资源向服务器发送请求时，会将上一次返回的 Etag 值放到 request header 里的 If-None-Match 里，服务器只需要比较客户端传来的 If-None-Match 跟自己服务器上该资源的 ETag 是否一致，就能很好地判断资源相对客户端而言是否被修改过了。如果服务器发现 ETag 匹配不上，那么直接以常规 GET 200 回包形式将新的资源（当然也包括了新的 ETag）发给客户端；如果 ETag 是一致的，则直接返回 304 知会客户端直接使用本地缓存即可。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/1/4/168196be6f2b9438~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"ETag和If-None-Match"}})]),t._v(" "),a("h3",{attrs:{id:"_3-两者之间对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-两者之间对比"}},[t._v("#")]),t._v(" 3.两者之间对比：")]),t._v(" "),a("ul",[a("li",[t._v("首先在精确度上，Etag 要优于 Last-Modified。")])]),t._v(" "),a("p",[t._v("Last-Modified 的时间单位是秒，如果某个文件在 1 秒内改变了多次，那么他们的 Last-Modified 其实并没有体现出来修改，但是 Etag 每次都会改变确保了精度；如果是负载均衡的服务器，各个服务器生成的 Last-Modified 也有可能不一致。")]),t._v(" "),a("ul",[a("li",[t._v("第二在性能上，Etag 要逊于 Last-Modified，毕竟 Last-Modified 只需要记录时间，而 Etag 需要服务器通过算法来计算出一个 hash 值。")]),t._v(" "),a("li",[t._v("第三在优先级上，服务器校验优先考虑 Etag")])]),t._v(" "),a("h2",{attrs:{id:"三、缓存头部优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、缓存头部优先级"}},[t._v("#")]),t._v(" 三、缓存头部优先级")]),t._v(" "),a("p",[a("strong",[t._v("同时存在各种缓存头时，各缓存头优先级及生效情况")])]),t._v(" "),a("p",[t._v("1、强缓存和协商缓存同时存在，如果强缓存还在生效期则强制缓存覆盖协商缓存，协商缓存不生效；如果强缓存不在有效期，协商缓存生效。即："),a("code",[t._v("强缓存优先级 > 协商缓存优先级")])]),t._v(" "),a("p",[t._v("2、强缓存 expires 和 cache-control 同时存在时，则 cache-control 会覆盖 expires，expires 无论有没有过期，都无效。 即："),a("code",[t._v("cache-control优先级 > expires优先级")]),t._v("。")]),t._v(" "),a("p",[t._v("3、协商缓存 Etag 和 Last-Modified 同时存在时，则 Etag 会覆盖 Last-Modified，Last-Modified 不会生效。即："),a("code",[t._v("ETag优先级 > Last-Modified优先级")]),t._v("。")]),t._v(" "),a("p",[t._v("当然还有一种缓存 pragma，和 cache-control 类似，前者是 http1.0 内容后者是 http1.1 内容，并且"),a("code",[t._v("pragma优先级 > cache-control优先级")]),t._v("，不过前者目前基本不使用。")]),t._v(" "),a("p",[t._v("ps: 当我们不设置 cache-control，只设置协商缓存，在不同浏览器下会有不同的表现。chrome 会直接从本地缓存获取，其他会请求服务器返回 304.这时候有两种方式让他们的响应一致。")]),t._v(" "),a("p",[t._v("1、设置 cache-control: public, max-age=0;记住，这里的 public 是关键。因为默认值是 private，表示其他代理都不要缓存，只有服务器缓存，而 max-age 又为 0，所以每次都会发起 200 的请求。设置 public 的意思就是允许其他各级代理缓存资源，因此如果资源没改变会返回 304。")]),t._v(" "),a("p",[t._v("2、直接设置 max-age=1000。即是一秒之后内容过期，目的是触发浏览器缓存。也能达到想要 304 的效果。")]),t._v(" "),a("h2",{attrs:{id:"四、使用-http-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、使用-http-缓存"}},[t._v("#")]),t._v(" 四、使用 http 缓存")]),t._v(" "),a("h3",{attrs:{id:"使用-expires-gmt-时间格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-expires-gmt-时间格式"}},[t._v("#")]),t._v(" 使用 Expires(GMT 时间格式)")]),t._v(" "),a("p",[t._v("浏览器会先对比当前时间是否已经大于 Expires，也就是判断文件是否超过了约定的过期时间。")]),t._v(" "),a("p",[t._v("时间没过，不发起请求，直接使用本地缓存。")]),t._v(" "),a("p",[t._v("时间过期，发起请求，继续上述的浏览器与服务器的谈话日常。")]),t._v(" "),a("p",[a("strong",[t._v("问题：假设 Expires 已过期，浏览器再次请求服务器，但 a.js 相比上次并未做任何改变，那这次请求我们是否通过某种方式加以避免？")])]),t._v(" "),a("h3",{attrs:{id:"使用-last-modified-与-if-modified-since-expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-last-modified-与-if-modified-since-expires"}},[t._v("#")]),t._v(" 使用(Last-Modified 与 if-Modified-Since)+Expires")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("Expires")]),t._v("未过期，浏览器机智的使用本地缓存。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Expires")]),t._v("过期，服务器带上了文件最新修改时间"),a("code",[t._v("if-Modified-Since")]),t._v("(也就是上次请求服务器返回的"),a("code",[t._v("Last-Modified")]),t._v(")，服务器将"),a("code",[t._v("if-Modified-Since")]),t._v("与"),a("code",[t._v("Last-Modified")]),t._v("做了个对比。")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("if-Modified-Since")]),t._v(" 与"),a("code",[t._v("Last-Modified")]),t._v("不相等，服务器查找了最新的 a.js，同时再次返回"),a("code",[t._v("Expires")]),t._v("与全新的"),a("code",[t._v("Last-Modified")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("if-Modified-Since")]),t._v(" 与"),a("code",[t._v("Last-Modified")]),t._v("相等，服务器返回了状态码 304，文件没修改过，你还是用你的本地缓存。")])])])])]),t._v(" "),a("p",[a("strong",[t._v("问题：浏览器端可以随意修改 Expires，Expires 不稳定，Last-Modified 只能精确到秒，假设文件是在 1s 内发生变动，Last-Modified 无法感知到变化，这种情况下浏览器永远拿不到最新的文件(假想极端情况)。")])]),t._v(" "),a("h3",{attrs:{id:"使用-last-modified-与-if-modified-since-expires-cache-control-etag-和-if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-last-modified-与-if-modified-since-expires-cache-control-etag-和-if-none-match"}},[t._v("#")]),t._v(" 使用 (Last-Modified 与 if-Modified-Since)+Expires+Cache-control+(Etag 和 If-None-Match)")]),t._v(" "),a("p",[t._v("由于"),a("code",[t._v("cache-control")]),t._v(" "),a("code",[t._v("max-age")]),t._v("的优先级比"),a("code",[t._v("Expires")]),t._v("的高.")]),t._v(" "),a("p",[a("strong",[t._v("第一次请求")])]),t._v(" "),a("p",[t._v("浏览器：我要资源 a.js")]),t._v(" "),a("p",[t._v("服务器：a.js 我给你，过期时间"),a("code",[t._v("Last-Modified")]),t._v("我也给你，再给你一个"),a("code",[t._v("max-age=60")]),t._v("(单位秒)，"),a("code",[t._v("Last-Modified")]),t._v("你也给我收好，再加一个文件内容唯一标识符"),a("code",[t._v("Etag")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("第一次请求，服务器给客户端的资源有："),a("strong",[t._v("最后更新时间 Last-Modified")]),t._v("，"),a("strong",[t._v("过期时间 max-age 和 Expires")]),t._v("（"),a("code",[t._v("因为max-age是http1.1，而Expires是http1.0的，为了兼容")]),t._v("）,"),a("strong",[t._v("文件唯一标识符:Etag")])])]),t._v(" "),a("p",[a("strong",[t._v("后续请求....")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("60S 内，不发起请求，直接使用本地缓存。（max-age=60 代表请求成功缓存后的 60S 内不再发起请求，与 Expires 相似，同时存在 max-age 优先级要比 Expires 高，区别后面具体说）")])]),t._v(" "),a("li",[a("p",[t._v("60S 后，浏览器带上了 "),a("code",[t._v("if-Modified-Since")]),t._v(" 与 "),a("code",[t._v("If-None-Match")]),t._v("(上次服务器返回来的 "),a("code",[t._v("Etag")]),t._v(")发起请求，服务器对比 "),a("code",[t._v("If-None-Match")]),t._v("与 "),a("code",[t._v("Etag")]),t._v("(不对比 "),a("code",[t._v("if-Modified-Since")]),t._v(" 与 "),a("code",[t._v("Last-Modified")]),t._v(" 了，"),a("strong",[t._v("Etag 优先级比 Last-Modified 高")]),t._v("，毕竟更精准)")])])]),t._v(" "),a("p",[a("code",[t._v("If-None-Match")]),t._v(" 与 "),a("code",[t._v("Etag")]),t._v(" 不相等，说明 "),a("code",[t._v("a.js")]),t._v(" 内容被修改过，服务器返回最新 "),a("code",[t._v("a.js")]),t._v(" 与全新的 "),a("code",[t._v("Etag")]),t._v(" 与 "),a("code",[t._v("max-age=60")]),t._v(" 与 "),a("code",[t._v("Last-Modified")]),t._v(" 与 "),a("code",[t._v("Expires")])]),t._v(" "),a("p",[a("code",[t._v("If-None-Match")]),t._v(" 与 "),a("code",[t._v("Etag")]),t._v(" 相等，说明 a.js 文件内容无任何改变，返回 "),a("code",[t._v("304")]),t._v("，告诉浏览器继续使用之前的本地缓存。")]),t._v(" "),a("p",[a("strong",[t._v("问题：我们已经可以精确的对比服务器文件与本地缓存文件差异，但其实上面方案的演变都存在一个较大缺陷， max-age 或 Expires 不过期，浏览器无法主动感知服务器文件变化。")])]),t._v(" "),a("h2",{attrs:{id:"五、http-缓存方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、http-缓存方案"}},[t._v("#")]),t._v(" 五、HTTP 缓存方案")]),t._v(" "),a("h3",{attrs:{id:"文件名-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件名-hash"}},[t._v("#")]),t._v(" 文件名 Hash")]),t._v(" "),a("p",[t._v("上述的将的 http 缓存，是针对某个文件，但是如果我所请求的资源路径发生变化了，那么是不是每次都请求的是新的呢？所以我们有如下的思路：")]),t._v(" "),a("ul",[a("li",[t._v("将不长变化的资源，设置长期缓存(max-age=较长时间)，通常包括`vue/vuex/vue-router 等资源库。")]),t._v(" "),a("li",[t._v("每次打包工程将修改过得文件名称进行 hash,这样只有相应的文件发生变化，浏览器只会请求变化的资源。"),a("code",[t._v("webpack")]),t._v("提供了"),a("code",[t._v("hash")]),t._v("，"),a("code",[t._v("chunk-hash")]),t._v("和"),a("code",[t._v("content-hash")]),t._v("三种对文件名称 hash 的方法。")])]),t._v(" "),a("h3",{attrs:{id:"cdn-缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn-缓存"}},[t._v("#")]),t._v(" CDN 缓存")]),t._v(" "),a("blockquote",[a("p",[t._v("CDN 是构建在网络之上的内容分发网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。")])]),t._v(" "),a("p",[a("strong",[t._v("CDN 边缘节点缓存数据，当浏览器请求，CDN 将代替源站判断并处理此处请求。")])]),t._v(" "),a("h2",{attrs:{id:"六、浏览器刷新对-http-缓存的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、浏览器刷新对-http-缓存的影响"}},[t._v("#")]),t._v(" 六、浏览器刷新对 http 缓存的影响")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("浏览器地址栏回车，或者点击跳转按钮，前进，后退，新开窗口，这些行为，会让 Expires，max-age 生效")]),t._v("，也就是说，这几种操作下，浏览器会判断过期时间，再考虑要不要发起请求，当然 Last-Modified 和 Etag 也有效。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("F5 刷新浏览器，或者使用浏览器导航栏的刷新按钮，这几种，会忽略掉 Expires，max-age 的限制，强行发起请求")]),t._v("，Last-Modified 和 Etag 在这种情况下也有效。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("CTRL+F5 是强制请求，所有缓存文件都不使用，全部重新请求下载")]),t._v("，因此 Expires，max-age，Last-Modified 和 Etag 全部失效。")])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/echolun/p/9419517.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http 缓存详解，http 缓存推荐方案"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://juejin.cn/post/6844903757872889870#heading-6",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章部分摘录自：深入浅出浏览器缓存机制"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=_.exports}}]);