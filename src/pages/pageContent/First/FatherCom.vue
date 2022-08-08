<template>
  <div>
    <el-button @click="getData()" type="primary">获取数据</el-button>
    <el-table :data="testReactive.data">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="study" label="学习科目"></el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button @click="transmitClick(scope.row)">传递</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <br />
    <br />
    <br />
    <br />
    <el-table :data="dataRef">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="study" label="学习科目"></el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button @click="transmitClick(scope.row)">传递</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 儿子组件 -->
    <ChildView :is-show="isOpen" :row="rowdata.data ? rowdata.data : rowdata">
      <div class="formFather">我是父组件的slot</div>
    </ChildView>
  </div>
</template>

<script setup>
import { 
  ref, 
  // toRef, 
  reactive, 
  computed 
  } from "vue";
import ChildView from "./ChildCom.vue";
const isOpen = ref(false);

let testReactive = reactive({
  data: [
    { name: "王丽", study: "Java" },
    { name: "李克", study: "Python" },
  ],
  name: "张三",
});

// ref 修改reactive 的属性值(基本值), 相当于重新复制了一份;
// ref 修改reactive 的属性值（对象）, 相当于深复制一份
// ref 修改普通对象，不会引起源对象的改变
// 总结 ref 修饰的值，相当于把值深copy一份，和原来的值毫无关联

const dataRef = ref(testReactive.data);


// 测试 reactive 的其他使用特性
// 1 reactive对象和源对象互相影响
// 2 reactive 响应式转换是“深层”的
// 3 reactive 不支持重新赋值


// toRef
// 1 toRef 传递的值是 reactive 和 ref 会改变视图
// 2 toRef 传递的值 普通对象不会改变视图，但是会改变数据
// 3 2中数据会变化，但是watch 监听不到该变化
// 4 toRef中变化的和reactive的值是相同的，即一变都会变化，并且会引起视图的变化

// const mythreeObj = {
//   name: "mythreeObj",
//   data: [
//     { name: "王丽", study: "Java" },
//     { name: "李克", study: "Python" },
//   ],
// };

// const mythreeObjReactive = reactive(mythreeObj);

// const threeNameRef = toRef(mythreeObjReactive, 'name');
// const threeDataRef = toRef(mythreeObjReactive, 'data');
// console.log(mythreeObjReactive, threeNameRef,threeDataRef, 'zn-toRef' )

// computed
// 1  set 设置数据的时候触发 和 get 获取数据的时候触发
// 2  set 不需要返回值，可以在里面生产副作用, get 需要返回值，可在里面生产副作用或者加工数据



// wacth 侦听多个源
// 1 监听的值 可以是个数组或者一个函数的返回值是个数组
// 2 只能监听reactive 和 ref 响应式对象
// 3



const rowdata = reactive({
  data: {},
});



const count = ref(2);

const plusOne = computed({
  get: () => {
    const res = count.value + 1;
    return res;
  },
  set: (val) => {
    count.value = val - 1;
  },
});

plusOne.value = 3;

// console.log(count.value, plusOne.value, "zn-new-count"); // 0
// watch(plusOne.value, (oldVal, newVal) => {
//   console.log(oldVal , newVal, 'zn-count')
// })
// watch(ordinaryObjToRef.value, (newVal, oldVal) => {
//   console.log('zn-watch', newVal, oldVal)
// }, {
//   immediate: true,
//   deep: true
// })

// watch(ordinaryObj, (newVal, oldVal) => {
//   console.log('zn-watch', newVal, oldVal, 2)
// }, {
//   immediate: true,
//   deep: true
// })

// export default {
//   components: { ChildView },

//   data() {
//     return {
//       isOpen: false,
//       row: {},
//       list: [
//         { name: "王丽", study: "Java" },
//         { name: "李克", study: "Python" },
//       ],
//     };
//   },
//   methods: {
//     // 传递事件
//     transmitClick(row) {
//       this.isOpen = true;
//       this.row = row;
//     },

//   },
// };
</script>