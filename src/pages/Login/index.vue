<template>
  <div class="login">
    <el-button type="primary" @click="handleLoginIn">登入</el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { setLocalStorage, } from '@/utils'
const router =useRouter()
const handleLoginIn = () => {
    setTimeout(() => {
        setLocalStorage('token', '12315');
        router.push('/first')
    }, 1000)

}

</script>

<style lang='less' scoped>
    .login{
        width: 100%;
        height: 100%;
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>