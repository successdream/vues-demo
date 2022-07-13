<template>
  <div class="leftContentBox" id="left-box">
    <!-- <el-button type="primary" @click="changCount"> 开启全屏 </el-button> -->
    <div class="leftSecondBox">

    </div>
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  watch,
  toRefs,
  provide,
  reactive,
  watchEffect,
  Teleport,
} from "vue";
import Test from "./Test";
import myMixin from "./Mymixin/myMixIn.js";
import CustomDirection from "./CustomDirection";
export default {
  // provide: {
  //   location: "North Pole",
  //   geolocation: {
  //     longitude: 90,
  //     latitude: 135,
  //   },
  //   count: () => {
  //     return  this.count
  //   }
  // },
  mixins: [myMixin],

  components: {
    Test,
    CustomDirection,
    Teleport,
  },

  setup() {
    let list = [];

    const listRef = ref([]);
    const count = ref(0);
    const obj = reactive({
      name: "张三",
      age: 18,
    });

    const objOne = ref({
      name: "张三",
      age: 25,
    });

    const getList = () => {
      setTimeout(() => {
        listRef.value = [
          {
            name: "张三",
            age: "18",
          },
          {
            name: "李四",
            age: "20",
          },
        ];

        // console.log(list);
      }, 2000);
    };

    onMounted(getList);

    provide("count", count);
    provide("obj", objOne);
    provide("location", "location的值");

    watchEffect(
      () => {
        // console.log("LeftCOntent中的watchEffect执行了");
        // debugger
      },
      { flush: "post" }
    );

    return {
      getList,
      list,
      listRef,
    };
  },
  data() {
    return {
      count: 0,
      show: true,
    };
  },

  computed: {},
  mounted() {
    const i18nStrings = {
      hi: "Hallo!",
    };
    console.log("LeftContent组件", this.$translate("hi", i18nStrings));
  },

  methods: {
    changCount() {
      this.count++;
      this.myMixInCount = this.myMixInCount * 2;
      this.show = !this.show;

      setTimeout(() => {
        this.listRef = [
          {
            name: "chang",
            age: 100,
          },
          {
            name: "chang",
            age: 200,
          },
          {
            name: "chang",
            age: 300,
          },
        ];
      }, 1000);
    },
  },
};
</script>

<style lang='less' scoped>
.leftContentBox {
  height: 100%;
  flex: 1;
  background: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .leftSecondBox {
    background-color: greenyellow;
    height: 500px;
    width: 500px;
    position: relative;
  }
}
.leftThreeBox {
  width: 100%;
  height: 100%;
  background-color: blue;
  position: absolute;
  left: 0px;
  top: 0px;
}
</style>