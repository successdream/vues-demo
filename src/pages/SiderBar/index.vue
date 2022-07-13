<template>
    <div class="siderBarCom">
      侧边栏占位符
      <el-button type="primary" style="{cursor:pointer}" @click="handleClick(!newShow)"> {{!newShow?'打开弹窗': '关闭弹窗'}}</el-button>
      <el-button type="primary" @click="handleCountChange"> 更改count </el-button>
      <!-- <button :style="{cursor: 'pointer'}" >打开弹窗</button> -->
  
      <!-- <component :is="Model"  /> -->
       <component :is="Model"  :show="newShow" />
      <div>{{JSON.stringify(newShow)}}</div>
      <div class="countRef"> 侧边栏 非响应式数据 {{count}} ==== countRef {{countRef}}</div>
      <h1 v-MyD:[test]="30">This is a Heading</h1>
      <div class="myFontColor">testProps的值{{ testProp}}</div>
      <slot></slot>

    </div>
</template>

<script setup>
import {   computed, ref  } from 'vue';
import { useStore } from "vuex";

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,

  
} from '@element-plus/icons-vue'
import Model from '@/components/model'
let count = 11;
const test = '123'

const countRef = ref(100)
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath)
}
const store = useStore()
console.log('zn-store', store)
const newShow = computed(() => store.state.show)
console.log('zn-store', newShow, 1);

const handleClick = (show) => {
  store.commit('changeShow', show)
}

const handleCountChange = () => {
    count = count + 1;
    countRef.value = countRef.value + 1;
    emit('change', 666, 777)
    if(count%2) {
      colorRef.value = 'yellow'
    } else {
      colorRef.value = 'red'

    }
}

// 使用指令, 值是个对象， v开头， 使用的时候 v- 开头
const vMyD = {
  mounted(el, data) {
    console.log('zn-vMyD',el, data);
    el.style.color="green"

  }
}


// 使用props
const props = defineProps({
  testProp: {
    default: '局部',
    type: String
  }
})

// 使用emits
const emit = defineEmits(['change', 'delete'])
const colorRef = ref('green')
const colorFn = (color) => {
  return color;
}

defineExpose({
  countRef,
  test,
  handleCountChange
})
</script>
<style  lang='less' scoped>
.siderBarCom{
  // 子组件修改slot中的样式
  // :slotted(.slotClass){
  //   color: yellow;
  // }
  // 支持在class 中 通过js 改变 css 样式的值
  .myFontColor{
    color: v-bind(colorFn(colorRef))
  }
}

</style>

<style module="classes">
.red {
  color: v-bind(colorFn(colorRef));
}
</style>