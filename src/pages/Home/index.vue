<template>
  <div class="myHome">
    <div class="myHome_top"></div>
    <div class="myHome_center">
      <div class="myHome_siderBar">
        <SiderBar ref="domSiderBarRef" @change="handleChange"  :user.prop="{ name: 'jack' }" testProp="12312">
          <div class="slotClass">我是slot中的内容</div>
        </SiderBar>
      </div>
      <div class="myHome_content">
        <LeftContent></LeftContent>
      </div>
    </div>
    <div class="myHome_bottom"></div>
    <!-- <div>我是Home组件的文本</div> -->
  </div>
</template>

<script>
import { ref, onMounted, watch, toRefs } from "vue";
import SiderBar from "../SiderBar";
import LeftContent from "../LeftContent";
export default {
  data() {
    return {};
  },
  setup() {
    const domSiderBarRef = ref(null)
    onMounted(() => {
      console.log(domSiderBarRef.value, 'zn-666');
      // domSiderBarRef.value.handleCountChange()
    })
    return {
      domSiderBarRef
    }
  },

  components: {
    SiderBar,
    LeftContent,
  },

  computed: {},

  methods: {
    // 处理变化
    handleChange(data, data1) {
      console.log('zn-handleChange', data, data1)
    }
  },

  mounted() {
    console.log(this.$refs.siderBar, 'zn-siderBar')
    // this.$refs.domSiderBarRef.handleCountChange()
  }

  // mounted() {
  //   this.getList()
  // }
};
</script>

<style lang='less' scoped>
.myHome {
  height: 100%;
  display: flex;
  flex-direction: column;
  // background-color:red ;
  .myHome_top {
    height: 80px;
    line-height: 80px;
    // background-color: green;
  }
  .myHome_center {
    flex: 1;
    // background-color: yellow;
    display: flex;
    // 替代/deep/
    // :deep( .countRef){
    //   color: red;
    // }
    .myHome_content {
      flex:1;
      position: relative;
      ul {
        display: flex;
        flex-direction: column;
        grid-row-gap: 15px;
        font-size: 25px;
        font-family: serif;
      }
    }
    .myHome_siderBar{
        // .slotClass{
        //   color: yellowgreen
        // }
    }
  }
  .myHome_bottom {
    height: 80px;
    line-height: 80px;
  }
}
</style>


<!-- <style lang="scss" module>
.span1 {
  color: green;
  font-size: 30px;
}
</style> -->