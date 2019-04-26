<template>
  <Poptip placement="bottom" >
    <Icon type="ios-funnel"/>
    <div class="api" slot="content">
      <Input placeholder="请输入..."/>

      <div class="btns" style="margin-top:10px">
        <Button type="dashed" :size="'small'">重置</Button>
        <Button type="primary" :size="'small'" ghost style="margin-left:20px;">筛选</Button>
      </div>
    </div>
  </Poptip>
</template>

<script>
import { Input, Button, Poptip, Icon } from "iview";
export default {
  components: {
    Input,
    Poptip,
    Button,
    Icon
  },
  data(){
      return{

      }
  }
};
</script>

<style>
.api {
  display: flex;
  flex-direction: column;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
