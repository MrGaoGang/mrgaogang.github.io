window.onload = function() {
  var css = document.createElement("style");
  css.innerHTML = `
  #read-more-wrap{

    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 9999;
    width: 100%;
    font-family: PingFangSC-Regular, sans-serif;

}

#read-more-mask{
        height: 100% !important;
}

#read-more-btn{
  border: 1px solid #198ded !important;
  background-color: #198ded  !important;
  color: white !important;
}
  `;
  document.head.appendChild(css);
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

  setTimeout(()=>{
    var more = document.getElementById('read-more-btn');
    more.innerText = '点击阅读全文';

  },2000)
};

module.exports = function() {
  
};
