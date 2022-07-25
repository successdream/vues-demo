<template>
<div class="myApp">
    <router-view/>
</div>

</template>

<script>

// ctrl + alt  + l  选中变量 ， 添加 console.log 需要插件配合
// ctrl + D 快速选中单词， 所有的
// shift + 左右键 选中单词
// ctrl + g 快速定位到某一行
// ctrl + shift + k 快速删除一行
// ctrl + 左右箭头 光变快速移动到某个单词
// ctrl + shift + 左右箭头 快速选中某个单词
// 重命名便令, 选中， f2 输入新名字， enter 所有的都会改变
// ctr +] 或 ctrl + [ 更改缩进
// ctrl + shift + [ 和 ctrl + shift + ] 折叠所在区域
// ctrl + h 全局替换， 类似 CTRL + f 选中单词 ，替换
// ctrl + F4 删除当前tab
// ctrl + tab 切换tab


// export 导出的两种种形式
// 1 export const   === 导入 import { } from 
// 2 export default import  from 
// 3 import * as  导入的是一个module 包括 export 和 export default
// 4 export * from 会把所有的非defult导出


// vuex 非命名空间
// actions 和 getters 会暴露 rootState
// 命名空间
// 



export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted() {
  //  console.log(this.$store.state.count, '全局变量')
  //  console.log("🚀 ~ file: App.vue ~ line 26 ~ mounted ~ state", '全局变量')
  //  console.log(PRODUCTION, '全局变量', 1);


  //  console.log(VERSION, '全局变量', 2);
  //  console.log(BROWSER_SUPPORTS_HTML5, '全局变量', 3);
  //  console.log(TWO, '全局变量', 4);
  //  console.log(typeof window, '全局变量', 5);
  //  console.log(process.env.NODE_ENV, '全局变量', 6);
   
  //  console.log(OBJ3, '全局变量', 7 );


  //  console.log(LODASH, '全局变量', 8);
  //  console.log(FN, '全局变量', 9);
  //  console.log(_, '全局变量', 9);




  //  FN()

   

   
   
   
   
   
  }
}
</script>

<style>
.myApp {
  height: 100%;
  width: 100%;
}
</style>
