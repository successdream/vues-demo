<template>
  <div class="myHome">
    <div class="myHome_top">
        <div class="top_left"></div>
        <div class="top_right">
          <el-button @click="handleLoginOut">登出</el-button>
        </div>
    </div>
    <div class="myHome_center">
      <div class="myHome_siderBar">
        <SiderBar ref="domSiderBarRef" :user.prop="{ name: 'jack' }" testProp="12312">
          
        </SiderBar>
      </div>
      <div class="myHome_content">
        <LeftContent></LeftContent>
      </div>
    </div>
    <div class="myHome_bottom"></div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import SiderBar from "../SiderBar";
import LeftContent from "../LeftContent";
import loginOut from './loginOut';

const { handleLoginOut } = loginOut();

// mounted 
onMounted(() => {

})

// 计算属性
// eslint-disable-next-line no-unused-vars
const myComputed = computed(() => {
  return 0
})


</script>

<style lang='less' scoped>
.myHome {
  height: 100%;
  display: flex;
  flex-direction: column;
  // background-color:red ;
  .myHome_top {
    height: 80px;
    line-height: 80px;
    padding: 0px 25px;
    display: flex;
    align-items: center;
    .top_left{
      flex: 1;
    }
    .top_right{
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

  }
  .myHome_center {
    flex: 1;
    // background-color: yellow;
    display: flex;
    // 替代/deep/
    // :deep( .countRef){
    //   color: red;
    // }
    .myHome_content {
      flex:1;
      position: relative;
      ul {
        display: flex;
        flex-direction: column;
        grid-row-gap: 15px;
        font-size: 25px;
        font-family: serif;
      }
    }
    .myHome_siderBar{
        // .slotClass{
        //   color: yellowgreen
        // }
        width: 300px;
    }
  }
  .myHome_bottom {
    height: 80px;
    line-height: 80px;
  }
}
</style>


<!-- <style lang="scss" module>
.span1 {
  color: green;
  font-size: 30px;
}
</style> -->