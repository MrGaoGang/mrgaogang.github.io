window.onload = function() {
  var themeDefaultContent = $(
    "#app > .theme-container>.page > .theme-default-content"
  );
  themeDefaultContent.attr("id", "container");
  btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
  btw.init({
    id: "container",
    blogId: "26610-1620818470013-209",
    name: "高小哥前端开发",
    qrcode:
      "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4959d28b5b64456a8148cc9d312a05dd~tplv-k3u1fbpfcp-watermark.image",
    keyword: "验证码",
  });
  // window.localStorage.setItem('mrgaogang-blog-has-focus',1)
};

module.exports = function(){}