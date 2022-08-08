<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        :default-active="defaultMenu"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
      <SiderBarChild :list="currentRoute"></SiderBarChild>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import SiderBarChild from './siderBarChild.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
// eslint-disable-next-line no-unused-vars
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath);
};
// eslint-disable-next-line no-unused-vars
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath);
};

const currentRoute = computed(() => {
    return store.state.routes.filter((item) => item.name !== 'login' && item.name !== 'NotFound')
})

const defaultMenu = computed(() => {
  return store.state.activeMenu
})
</script>
<style lang="less" scoped>

  .tac{
    // width: 100%;
    :deep{
      .el-menu-item {
        font-size: 20px;
      }
      .el-menu-item-group__title{
        >span {
          font-size: 20px;
          // color: red;
        }

      }
      .el-sub-menu__title{
        >span{
          font-size: 20px;
          // color: red;
        }
      }
    }

  }
</style>