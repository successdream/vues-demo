<template>
  <template v-for="(item, index) in list" :key="index">
    <el-sub-menu :index="item.path" v-if="item.children">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <SiderBarChild :list="item.children" v-if="item.children && item.children.length"></SiderBarChild>

      <el-menu-item
        v-else
        :index="item.path"
        v-for="(item, index) in item.children"
        :key="index"
        @click="handleRouteClick"
        >{{item.name}}</el-menu-item
      >
    </el-sub-menu>
    <el-menu-item :index="item.path" @click="handleRouteClick" v-else>
      <el-icon><icon-menu /></el-icon>
      <span>{{item.name}}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
import { defineProps, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
import SiderBarChild from './siderBarChild.vue'

import {
  Menu as IconMenu,
  Location,
} from "@element-plus/icons-vue";
const props = defineProps({
  list: {
    default: () => [],
    type: Array,
  },
});
console.log(props)
const { list } = toRefs(props);
const router = useRouter();


watch(list, (newVal) => {
    console.log(newVal, 'zn-666')
}, {
    immediate: true
})



const handleRouteClick = (e) => {
    console.log(e)
    const route = e.index;
    router.push(route)
}

</script>

<style lang='less' scoped>
</style>