<template>
<div class="myApp">
    <router-view/>
</div>

</template>

<script>
import { onMounted } from '@vue/runtime-core'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted() {
    console.log(this.$store.state.count)
  }
}
</script>

<style>
.myApp {
  height: 100%;
  width: 100%;
}
</style>
