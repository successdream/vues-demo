<template>
  <div class="layOut">
    <div class="siderBar">
        <!-- <SiderBar></SiderBar> -->
    </div>
    <div class="content">
        <!-- <LeftContent></LeftContent> -->
    </div>
  </div>
</template>

<script setup>
import SiderBar from "../SiderBar";
import LeftContent from "../LeftContent";
</script>

<style lang='less' scoped>
.layOut{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 300px auto;
    .siderBar{
        background-color: red;
    }
    .content{
        background-color: green;

    }
}

</style>