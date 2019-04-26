<template>
  <div>
    <div>{{bVarable}}</div>
    <button @click="showGloabl">显示全局共享变量</button>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      bVarable: ""
    };
  },

  computed: {
    bVarablea() {
      return Vue.$globalVariable;
    }
  },

  watch: {
    bVarablea(old, newA) {
      console.log("====================================");
      console.log(newA);
      console.log("====================================");
    }
  },

  methods: {
    showGloabl() {
      console.log("====================================");
      console.log(Vue.$globalVariable);
      console.log("====================================");
    }
  },

  mounted() {
    this.bVarable = Vue.$globalVariable;
  }
};
</script>

<style>
</style>
