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
      </el-menu>
    </el-col>

  </el-row>
</template>

<script setup>
import SiderBarChild from './siderBarChild.vue';
import routes from '@/router/routes';
import { computed } from 'vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const currentRoute = computed(() => {
    return routes.filter((item) => item.name !== 'login' && item.name !== 'NotFound')
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