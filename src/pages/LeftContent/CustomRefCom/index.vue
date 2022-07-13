<template>
  <div class="customRef">
    <input v-model="text" type="text" />
  </div>
</template>

<script>
import { customRef } from 'vue';
// import { compact } from 'lodash'
function useDebouncedRef(value, delay = 200) {
  let timeout
  console.log(value)
  return customRef((track, trigger) => {
    
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue;
          console.log('zn-trigger', trigger)
          trigger()
        }, delay)
      }
    }
  })
}
export default {
  data () {
    return {
      list: [ '一月份', '二月份', '三月份', '', false, '六月份']
    };
  },
  setup() {
    return {
      text: useDebouncedRef('hello')
    }
  },

  components: {},

  computed: {},

  mounted() {
    this.handleFalesy(this.list)
  },

  methods: {
    trigger() {
      alert(666)
    },
    handleFalesy() {  
      
      const myList = _.compact(this.list);
      console.log(myList, 'zn-myList');     
      
    }
  }
}
</script>

<style lang='less' scoped>
.customRef {
}
</style>