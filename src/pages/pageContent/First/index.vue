<template>
  <div>
    <div>我是first 组件</div>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// import Father from "./FatherCom.vue";
// import Model from "@/components/model";
// import { mapState, mapMutations, mapGetters } from "vuex";
// import { $get } from "@/Api";
// import * as All from "./testOne.js";

// // 处理Vuex 非命名空间
// const handleVuexNoModulesClick = () => {};
const router = useRouter();
const handleRouter = () => {
  router.push('/first/firstChildOne')
}
</script>

<style lang='less' scoped>
.myRoute {
  // width: 100px;
  // height: 100px;
  // background-color: red;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  color: #fff;
}
.myAclass {
  width: 200px;
  height: 200px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  color: blue;
}
</style>