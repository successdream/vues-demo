<template>
  <div class="myHome">
    <div class="myHome_siderBar">
      <SiderBar
        ref="domSiderBarRef"
      >
      </SiderBar>
    </div>
    <div class="myHome_left">
      <LeftContent></LeftContent>
    </div>
  </div>
</template>

<script setup>
import SiderBar from "../SiderBar";
import LeftContent from "../LeftContent";
</script>

<style lang='less' scoped>
.myHome {
  height: 100%;
  display: flex;
  .myHome_siderBar{
    width: 230px;
  }
  .myHome_left {
    flex: 1;
  }
}
</style>


<!-- <style lang="scss" module>
.span1 {
  color: green;
  font-size: 30px;
}
</style> -->