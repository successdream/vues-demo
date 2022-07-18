<template>
  <Teleport :disabled="show" to="body">
    <div class="modelBox" v-if="show" @click="changeShow">
        <div class="modelInnerBox"></div>
    </div>
      <!-- <el-button type="primary" @click="changeShow"> 关闭全屏 </el-button> -->
  </Teleport>
</template>

<script>
export default {
    props: {
        show: {
            default: false,
            type: Boolean
        }
    },
  data() {
    return {
      testVal: true
    };
  },
  watch: {
    show(val) {
        console.log(val)

    }
  },

  components: {},

  computed: {},

  methods: {
    changeShow() {
        this.$store.commit('changeShow', false)
        if(this.testVal) {
          const testFn = function()  {
            console.log(12312)
            console.log(12312)

          }
          // function testFn() {
          //   console.log('testFn')
          // }
          testFn()
        }
    },

    async testFor() {
      // for (let i = 0; i < 10; i--) {
      //   console.log(1212)
      // }

      // new Promise(async() => {

      // })

      // for(let a of [1,2,3]){
      //   await new Promise((resolve) => {
      //     resolve(a)
      //   })
      // }
      // const val = '123';
      // switch(val) {
      //   case '345': 
      //     break;
      //   case '345':
      //     break;

      // }
      // if(this.testVal) {

      // }

      // switch(this.testVal) {
      //   case 1 : {
      //     let a = 1;
          
      //     break;
      //   }
        
      //   break;
      // }

      const data = { 
        a: 1,
        b: 2,
        c: 3
      };
      // const 

      const {a} = data;
      console.log(a)
    }
  },
};
</script>

<style lang='less' scoped>
.modelBox{
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
    .modelInnerBox{
        width: 300px;
        height: 300px;
        background-color: rgb(0, 128, 0);;
        
    }
}
</style>