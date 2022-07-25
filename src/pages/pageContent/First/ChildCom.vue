<template>
  <div class="child-view">
    我是firstChildOne 组件
    <!-- <GrandChild v-bind="$attrs" :reactObj="reactObj"></GrandChild> -->
  </div>
</template>
<script setup>
// import GrandChild from "./GrandChild.vue";
import { reactive } from "vue";
const reactObj = reactive({
  name: 'react'
});

const handleClick = () => {
  reactObj.name = '我是修改过的reactObj的name';
}



</script>
<style lang="less" scoped>
.child-view {
  margin: 20px;
  border: 2px solid red;
  padding: 20px;
  >p{
    cursor: pointer;
  }
}
</style>