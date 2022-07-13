<template>
    <div class="siderBarCom">
      侧边栏占位符
      <el-button type="primary" style="{cursor:pointer}" @click="handleClick(!show)"> {{!show?'打开弹窗': '关闭弹窗'}}</el-button>

      <!-- <button :style="{cursor: 'pointer'}" >打开弹窗</button> -->
      <Model :show="show"/>
      <div>{{JSON.stringify(show)}}</div>
    </div>
</template>

<script setup>
import {   computed  } from 'vue';
import { useStore } from "vuex";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,

  
} from '@element-plus/icons-vue'
import Model from '@/components/model'
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath)
}
const store = useStore()
console.log('zn-store', store)
const show = computed(() => store.state.show)
console.log('zn-store', show, 1);

const handleClick = (show) => {
  store.commit('changeShow', show)
}

</script>
<style>
    .siderBarCom{

    }
</style>