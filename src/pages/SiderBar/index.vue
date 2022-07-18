<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
      <SiderBarChild :list="currentRoute"></SiderBarChild>
        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item> -->
      </el-menu>
    </el-col>

  </el-row>
</template>

<script setup>
import SiderBarChild from './siderBarChild.vue';
import routes from '@/router/routes';
import { computed } from 'vue'

// import routes from '@/router/routes.js'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const currentRoute = computed(() => {
    return routes.filter((item) => item.name !== 'login')
})
</script>
<style lang="less" scoped>
  // tac:deep
  // ::v-deep{
  //   .el-row {
  //     width: 100%;
  //   }
  // }
  .tac{
    // width: 100%;
    :deep{
      .el-menu-item {
        font-size: 20px;
      }
      .el-menu-item-group__title{
        >span {
          font-size: 20px;
          color: red;
        }

      }
      .el-sub-menu__title{
        >span{
          font-size: 20px;
          color: red;
        }
      }
    }

  }
</style>