<template>
  <div class="dis">
    <div class="dis-item">
      <span>添加全局方法测试</span>
      <Poptip trigger="focus">
        <Input
          v-model="gloablFunc"
          prefix="logo-usd"
          placeholder="Enter number"
          style="width: 120px"
        />
        <div slot="content">{{ formatNumber }}</div>
      </Poptip>
      <B/>
    </div>

    <div class="dis-item">
      <span>添加实例方法/属性测试</span>
      <div>{{ instanceVar }}</div>
    </div>
  </div>
</template>

<script>
import { Input, Poptip } from "iview";
import B from "./B.vue";
import Vue from "vue";


export default {
  components: {
    Input,
    Poptip,
    B
  },
  data() {
    return {
      gloablFunc: "",
      instanceVar:""
    };
  },

  computed: {
    formatNumber: function() {
      //调用全局共享方法
      return Vue.$globalFunction(this.gloablFunc);
    }
  },

  mounted(){
      console.log(this.$instanceVar);

      Vue.$globalVariable="我是全局属性修改了的";

      this.$instanceVar="我是实例属性》》》 修改了的";
      this.instanceVar=this.$instanceVar;

      //this.instanceVar=this.$instanceFunction(20);
  }
};
</script>

<style scoped>
.dis {
  display: flex;
  flex-direction: column;
}

.dis-item{
    margin-top: 30px;
}
</style>
