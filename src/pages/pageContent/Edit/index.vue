<template>
  <div  @click="handleClick" style="cursor: pointer">
    我是edit组件 12313131
  </div>
</template>

<script setup>
import { reactive, toRaw } from 'vue';

const arr = [
  {
    name: 'option1',
    value: 'option1'
  },
    {
    name: 'option2',
    value: 'option2'
  },
]

const myArr = reactive({ data: arr});
const list = myArr.data.filter((item) => {
  return item.name === 'option1'
})
console.log(list,  'list', 'zn-myArr')
console.log(toRaw(list[0]), 'list', 'zn-myArr')
// console.log(toRaw(myArr.data), 'toRaw myArr.data', 'zn-myArr')






</script>

<style lang='less' scoped>

</style>