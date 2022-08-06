<template>
  <div class="detailBox">
    <!-- <span class="jiugongge">
      <div v-for="(item, index) in arr" :key="index">{{ item }}</div>
    </span> -->
    <div class="testFr">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
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
  // .jiugongge {
  //   height: 300px;
  //   width: v-bind(currentWidth);
  //   // width:  300px;
  //   // border: 1px solid green;
  //   display: inline-grid;
  //   // grid-template-columns: repeat(3,33.3%);
  //   grid-template-columns: repeat(auto-fill, 100px);
  //   grid-template-rows: repeat(auto-fill, 100px);
  //   overflow: hidden;
  //   color: #fff;
  //   :nth-child(1) {
  //     background-color: rgb(205, 36, 36);
  //   }
  //   :nth-child(2) {
  //     background-color: rgb(28, 64, 163);
  //   }
  //   :nth-child(3) {
  //     background-color: rgb(137, 44, 126);
  //   }
  //   :nth-child(4) {
  //     background-color: rgb(206, 54, 72);
  //   }
  //   :nth-child(5) {
  //     background-color: rgb(26, 54, 72);
  //   }
  //   :nth-child(6) {
  //     background-color: rgb(13, 9, 80);
  //   }
  //   :nth-child(7) {
  //     background-color: rgb(12, 171, 142);
  //   }
  //   :nth-child(8) {
  //     background-color: rgb(212, 32, 232);
  //   }
  //   :nth-child(9) {
  //     background-color: rgb(42, 10, 23);
  //   }
  //   :nth-child(10) {
  //     background-color: rgb(5, 13, 167);
  //   }

  //   :nth-child(11) {
  //     background-color: rgb(9, 145, 132);
  //   }

  //   :nth-child(12) {
  //     background-color: rgb(134, 117, 124);
  //   }

  //   :nth-child(13) {
  //     background-color: rgb(2, 2, 70);
  //   }

  //   :nth-child(14) {
  //     background-color: rgb(10, 158, 40);
  //   }

  //   :nth-child(15) {
  //     background-color: rgb(11, 25, 98);
  //   }

  //   :nth-child(16) {
  //     background-color: rgb(105, 9, 78);
  //   }

  //   :nth-child(17) {
  //     background-color: rgb(201, 152, 19);
  //   }

  //   :nth-child(18) {
  //     background-color: rgb(48, 128, 10);
  //   }

  //   :nth-child(19) {
  //     background-color: rgb(203, 190, 7);
  //   }

  //   :nth-child(20) {
  //     background-color: rgb(10, 130, 118);
  //   }
  // }

  .testFr {
    display: grid;
    height: 500px;
    width: 500px;
    // background-color: red;
    // width: v-bind(currentWidth);
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    // border: 1px solid #ccc;
    // background-color: yellowgreen;
    color: #fff;
      //   justify-items: center;
      // align-items: center;
    // justify-content: space-evenly;
    justify-content: stretch;
    align-content: stretch;
    :nth-child(1) {
      background-color: green;
      overflow: auto;
      grid-column-start: 2;
      grid-column-end: 4;

    }
    :nth-child(2) {
      background-color: red;
      overflow: auto;
    }
    :nth-child(3) {
      background-color: rgb(49, 29, 147);
      overflow: auto;
    }
    :nth-child(4) {
      background-color: rgb(148, 23, 46);
      overflow: auto;
    }
    :nth-child(5) {
      background-color: rgba(179, 84, 84, 0.788);
      overflow: auto;
    }
    :nth-child(6) {
      background-color: rgb(24, 55, 45);
      overflow: auto;
    }
    :nth-child(7) {
      background-color: rgb(182, 199, 182);
      overflow: auto;
    }
    :nth-child(8) {
      background-color: rgb(76, 23, 233);
      overflow: auto;
    }
    :nth-child(9) {
      background-color: rgb(39, 15, 91);
      overflow: auto;
    }
  }

  //   .testFr{
  //   display: flex;
  //   width: 300px;
  //   // grid-template-columns: 100px 1fr;
  //   // grid-template-rows: 1fr;
  //   background-color: yellowgreen;
  //   :nth-child(1) {
  //     background-color: green;
  //     overflow: auto;
  //     width: 100px;

  //     height: 50px;
  //   }
  //   :nth-child(2) {
  //     background-color: red;
  //     overflow: auto;
  //     flex:1;
  //     height: 50px;
  //   }
  //   .tetsInnerOne{
  //     color: #fff;
  //     width: 250px;
  //     background-color: pink;
  //     height: 100%;
  //   }
  //   .tetsInnerTwo{
  //     color: #fff;
  //     width: 250px;
  //     background-color: hotpink;
  //     height: 100%;

  //   }

  // }
}
</style>