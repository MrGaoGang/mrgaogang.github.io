import Vue from "vue";
import App from "./App.vue";
//为了兼容ie浏览器
import "babel-polyfill";
import store from "./store";
import "./plugins/iview.js";
import router from "./router/index";

//插件：全局/Vue实例插件
import install from "./plugins/demo.js";
Vue.use(install);

//插件开发：过滤实例
import { currency } from "./currency";
Vue.filter("currency", currency);

// 插件开发：混入实例
Vue.mixin({
  created: function() {
    //console.log("相信我，这个Log会在每一个Vue实例created之前调用");

    var myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption);
    }
  }
});

//插件开发：自定义指令
Vue.directive('demo', {
    bind: function (el, binding, vnode) {
      var s = JSON.stringify
      el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
    }
  });

new Vue({
  el: "#app",
  store,
  router,
  myOption: "hello! mrgao",
  render: h => h(App)
});
