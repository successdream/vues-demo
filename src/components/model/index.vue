<template>
  <Teleport :disabled="show" to="body">
    <div class="modelBox" v-if="show" @click="changeShow">
      <div class="modelInnerBox"></div>
    </div>
    <!-- <el-button type="primary" @click="changeShow"> 关闭全屏 </el-button> -->
  </Teleport>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import { useStore } from 'vuex';

const props = defineProps({
  show: {
    default: false,
    type: Boolean,
  },
});
const { show } = toRefs(props);
const store = useStore()
const changeShow = () => {
  store.commit('changeShow', false)
};
</script>

<style lang='less' scoped>
.modelBox {
  width: 100%;
  height: 100%;
  background-color: rgba(128, 51, 0, 0.63);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1000;
  .modelInnerBox {
    width: 300px;
    height: 300px;
    background-color: rgb(0, 128, 0);
  }
}
</style>