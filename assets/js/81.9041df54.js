(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{222:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("开发vue项目，大多数我们都是使用的"),n("code",[t._v("vue-cli")]),t._v("，众所周知，我们在本地联调服务API时，会存在跨域问题。那么我们如何利用"),n("code",[t._v("cli")]),t._v("解决跨域问题呢？\n其实"),n("code",[t._v("webpack")]),t._v("官网已有介绍"),n("a",{attrs:{href:"https://webpack.docschina.org/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("dev-server#proxy"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[t._v("如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。\n这个问题可以通过 "),n("code",[t._v("vue.config.js")]),t._v(" 中的"),n("code",[t._v("devServer.proxy")]),t._v(" 选项来配置。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n devServer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    host"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost.company.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.example.org'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目标服务器 host")]),t._v("\n        changeOrigin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主要是这里：默认false，是否需要改变原始主机头为目标URL")]),t._v("\n        ws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                         "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否代理websockets")]),t._v("\n        pathRewrite"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api/old-path'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/new-path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重写请求，比如我们源访问的是api/old-path，那么请求会被解析为/api/new-path")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api/remove/path'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path'")]),t._v("           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同上")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果请求主机 == 'dev.localhost:3000',")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重写目标服务器 'http://www.example.org' 为 'http://localhost:8000'")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dev.localhost:3000'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8000'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);