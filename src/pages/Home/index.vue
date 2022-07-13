<template>
  <div class="myHome">
    <div class="myHome_top"></div>
    <div class="myHome_center">
      <div class="myHome_siderBar">
        <SiderBar></SiderBar>
      </div>
      <div class="myHome_content">
        <LeftContent></LeftContent>
      </div>
    </div>
    <div class="myHome_bottom"></div>
    <div v-my-directive="'red'">我是Home组件的文本</div>
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

  components: {
    SiderBar,
    LeftContent,
  },

  computed: {},

  methods: {},

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
    .myHome_siderBar {
      width: 300px;
    }
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
  }
  .myHome_bottom {
    height: 80px;
    line-height: 80px;
  }
}
</style>