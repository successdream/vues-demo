<template>
  <div class="grand-child-view">
    <p>孙子组件</p>
    <p>
      传给孙子组件的数据：{{ row.name }}
      {{ row.name !== undefined ? "学习" : "" }} {{ row.study }}
    </p>
    <p>reactObjName {{ reactObj.name }}</p>
    <p>isShow {{ isShow }}</p>
  </div>
</template>
<script setup>
import { defineProps, toRefs } from "vue";
const props = defineProps({
  isShow: {
    type: Boolean,
    dedault: false,
  },
  row: {
    type: Object,
    dedault: () => {},
  },
  reactObj: {
    type: Object,
    default: () => {},
  },
});

const { isShow, row, reactObj } = toRefs(props);
</script>