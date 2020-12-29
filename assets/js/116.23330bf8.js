(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{414:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("组件开发有很多中方式，比如使用React/Vue或者使用符合AMD规范的库；其实mendix官网开发的组件是使用的dojo开发。")])]),t._v(" "),n("blockquote",[n("p",[t._v("如果有同学没有学习过Vue/React开发，但是对原生Javascript有一定了解的话，请移步"),n("a",{attrs:{href:"http://note.youdao.com/noteshare?id=b2eb116aa4bc96e6f82a0ce10cbe1c1e",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发一个简单组件需要的步骤"),n("OutboundLink")],1),t._v("和"),n("a",{attrs:{href:"http://note.youdao.com/noteshare?id=06403f0b04a179cbe1d4864ae2145bd4",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件开发引入外部符合AMD规范的库存在的问题"),n("OutboundLink")],1),t._v("。我想在以上可以找到答案。")])]),t._v(" "),n("blockquote",[n("p",[t._v("本文不详细解释如何使用Vue开发一个页面，如果您有使用Vue开发Mendix组件的需求，\n那么请直接点击下载"),n("a",{attrs:{href:"https://github.com/MrGaoGang/mendix_vue_template.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mendix组件开发之Vue基础包"),n("OutboundLink")],1),t._v("。\n使用基础包开发会减少您的开发周期，如果基础包有什么问题请联系我gaogangwork@qq.com。")])]),t._v(" "),n("h1",{attrs:{id:"使用vue开发mendix组件模板"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用vue开发mendix组件模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用Vue开发Mendix组件模板")]),t._v(" "),n("p",[n("router-link",{attrs:{to:"/mendix/widgets/"}},[t._v("English")])],1),t._v(" "),n("p",[t._v("如果你对mendix组件开发基础知识还不了解的话，请先移步"),n("a",{attrs:{href:"https://mrgaogang.github.io/article/mendix/widgets/%E8%AF%A6%E7%BB%86API.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人博客-mendix组件开发专题"),n("OutboundLink")],1)]),t._v(" "),n("blockquote",[n("p",[t._v("由于mendix只在Windows中有客户端，所以必须在windows中国使用此模板。")])]),t._v(" "),n("p",[t._v("使用步骤如下：")]),t._v(" "),n("h2",{attrs:{id:"_1-安装git和zip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装git和zip","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 安装git和zip")]),t._v(" "),n("p",[t._v("第一步: 建议你使用git命令行来构建组件。git下载地址是 "),n("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击这里下载"),n("OutboundLink")],1),t._v(";\n第二步: 安装 "),n("strong",[t._v("zip and bzip2")]),t._v(" "),n("a",{attrs:{href:"https://sourceforge.net/projects/gnuwin32/files/",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击去这里下载zip和bzip2"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("我下载的是“zip-3.0-bin.zip” 和 “zip.exe” ， “bzip2-1.0.5-bin.zip” 和 “bzip2.dll” /bin/.exe\n记住："),n("strong",[t._v("将zip.exe文件和bzip2.dll文件拷贝到git安装目录下")])]),t._v(" "),n("h2",{attrs:{id:"_2-如何使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 如何使用")]),t._v(" "),n("p",[t._v("第一步: 下载这个模板或者 git clone https://github.com/MrGaoGang/mendix_vue_template\n第二步: 打开组件开发根目录\n第三步:运行如下命令")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),n("p",[t._v("如果你想打生产包的组件的话，请修改webpack.config.js的文件")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("   mode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Change the mode do "production" before you go live! Don\'t forget!')]),t._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Change the plugin do "production" before you go live! Don\'t forget!')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefinePlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'process.env'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"development\"'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// change to "production" when publishing your Mendix widget')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"致谢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#致谢","aria-hidden":"true"}},[t._v("#")]),t._v(" 致谢")]),t._v(" "),n("p",[t._v("十分感谢 https://intonovi.com 封装了基础模板，其Github地址为"),n("a",{attrs:{href:"https://github.com/Intonovi/mendix-vuejs-widget-boilerplate",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v("；本项目是基于此模板进行的优化和改良。")])])}),[],!1,null,null,null);e.default=s.exports}}]);