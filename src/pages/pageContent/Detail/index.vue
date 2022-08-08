<template>
  <div class="detailBox">
    <div class="testFr">
      <div>11231</div>
      <div>end21231123333333333333333333333333333333333333333333</div>
      <!-- <div>3</div> -->
       <!-- <div>4</div>
      <div>5</div>
      <div>6</div> -->
       <!-- <div>7</div>
      <div>8</div>
      <div>9</div> -->
      <!-- <div>11111</div> -->

    </div>
    <el-button @click="handleClick" type="primary">按钮</el-button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const arr = reactive([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]);
const currentWidth = ref("300px");
const mark = ref(false);

const handleClick = () => {
  if (mark.value) {
    currentWidth.value = "300px";

    mark.value = false;
  } else {
    currentWidth.value = "500px";
    mark.value = true;
  }
};
</script>

<style lang='less' scoped>
.detailBox {
  width: 100%;
  .testFr {
    display: grid;
    height: 500px;
    width: 500px;
    grid-template-columns: repeat(2, 1fr);
    // background-color: yellowgreen;

    // grid-template-columns: 500px;
    // grid-template-rows: 500px;

    // grid-template-columns: repeat(3, 33.3%);
    // grid-template-rows: repeat(3, 33.3%);
    // background-color: #fff;
    // grid-auto-flow: row dense;
    // grid-template:
    //   "a a a" 33.3%
    //   ". b b" 33.3%
    //   "c c c" 33.3%
    //   /33.3% 33.3% 33.3%;
    > div {
      &:nth-child(1) {
        // grid-area: a;
        background-color: red;
        // align-items:center;
        // justify-items:center;
        // grid-column-start:1;
        // grid-column-end:3;
        //     grid-row-start: 1;
        // grid-row-end: 2;
        //   grid-column-start: 1;
        // grid-column-end: 2;
        // grid-area: 1 / 1 / 2 / 2;
      }
      &:nth-child(2) {
        // grid-row-start: 1;
        // grid-row-end: 2;
        // grid-column-start: 1;
        // grid-column-end: 2;
        // overflow: auto;


        // grid-area: b;
        // grid-area: 1 / 1 / 2 / 2;

        //       grid-column-start:2;
        // grid-column-end:4;

        background-color: green;

      }
      &:nth-child(3) {
        // grid-area: c;
        background-color: blue;

      }
            &:nth-child(10) {
        // grid-area: c;
        background-color: yellow;

      }
    }
  }
}
</style>