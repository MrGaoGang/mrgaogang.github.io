<template>

</template>

<script>
var mixin = {
  data: function() {
    return {
      message: "hello",
      foo: "abc"
    };
  },
  created: function() {
    console.log("混入对象的钩子被调用");
  },
  methods:{
      demo1(){
           console.log("混入demo1");
      },
      demo2(){
            console.log("混入demo2");
      }
  }
};

export default {
  mixins: [mixin],
  data: function() {
    return {
      message: "goodbye",
      bar: "def"
    };
  },
  created: function() {
       console.log('组件钩子被调用')
    console.log(this.$data);
    //混入对象的钩子被调用
    //组件钩子被调用
    // => { message: "goodbye", foo: "abc", bar: "def" }
  },
  methods:{
      demo1(){
          console.log("组件demo1");
          
      }
  }
};
</script>

<style>
</style>
