<template>
  <div class="login">
    <el-button type="primary" @click="handleLoginIn">登入</el-button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const route = useRoute();
const store = useStore();


const handleLoginIn = () => {
    store.commit('changeUserToken', '12345');
    if(route.query.toPath) {
      router.push({
        path: route.query.toPath
      })
    } else {
      router.push({
        path: '/first'
      })
    }
    
    // console.log('zn-router', router, route);
    


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