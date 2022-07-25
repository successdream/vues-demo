<template>
  <div>
    我是list组件
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },

  components: {
 
  },

  computed: {},

  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
    goToOther() {
      this.$router.push('/first/child1')

    }
  }
}
</script>

<style lang='less' scoped>

</style>