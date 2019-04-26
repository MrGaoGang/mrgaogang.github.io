export default {
  install: function(Vue, options) {
    Vue.$globalFunction = function(num) {
      return 2 * num;
    };

    Vue.$globalVariable = "我是全局变量";

    Vue.prototype.$instanceFunction = function(num) {
      return 3 * num;
    };
    Vue.prototype.$instanceVar="我是实例";
  }
};
