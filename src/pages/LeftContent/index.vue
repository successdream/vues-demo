<template>
  <div class="leftContentBox" id="left-box">
   <div class="navBar">
    
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  ref,  // 基本值响应式 ref 装饰，取值是 ref.value
  onMounted,  // mounted  参数是个 回调函数
  // eslint-disable-next-line no-unused-vars
  watch, //  参数一是值， 参数二是回调函数
  provide, // 参数一是key, 参数二是值
  reactive, // 对象 响应式  proxy 装饰 取值是 副本对象.key
  watchEffect, // watch 副对象, props变化，不执行， state 变化不执行，因为props和state是对象，引用类型，不会触发
  // eslint-disable-next-line no-unused-vars
  Teleport, // v3 新增组件，可把组件移动到除app组件和body下，其他的则不行
  isProxy, // 检查是不受readOny和reactive装饰的对象
  toRaw, // 去除poxy装饰，还原本对象，还原的对象和原对象是否可以 === // toRaw修饰的数组，filter 后生成的是普通的数组包括poxy对象
  readonly, // 对象的只读属性
  isReactive, // 是否是reactive装饰的对象
  markRaw, // 标记此对象不可作为可响应式对象
  unref, // 还原ref， 若ref修饰的是基本值，则还原为基本值，若为对象，执行后为poxy装饰的对象
  // eslint-disable-next-line no-unused-vars
  toRef, // 此为一个非响应式对象的属性变为可响应式ref
  toRefs, // 把一个响应式对象，转为普通对象，但是其属性转为ref
  // eslint-disable-next-line no-unused-vars
  isRef, // 检查一个对象是不是一个ref
  // eslint-disable-next-line no-unused-vars
  customRef, // 自定义ref
} from "vue";
// import Test from "./Test";
import myMixin from "./Mymixin/myMixIn.js";
// import CustomDirection from "./CustomDirection";
// import CustomRefCom from './CustomRefCom'
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
    // Test,
    // CustomDirection,
    // Teleport,
    // CustomRefCom
  },

  setup() {
    let list = [];

    const listRef = ref([]);
    const count = ref(0);
    // 本质上 testObj 和 obj 还是一个对象
    const testObj = {
      name: "王五",
      age: "22",
    };
    const obj = reactive(testObj);
    const objOne = {
      a: 1
    }
    obj.name = "赵六";
    const refObj = {
      name: "张三",
      age: 25,
    };
    // const refObj = '张三'
    // ref 修饰对象，是用ref包裹了reactive
    // ref 修饰基本值，则直包裹了ref
    // unref 清除ref 包括的对象，则返回的poxy代理的对象，即reactive修饰的对象
    const objOneRef = ref(refObj);

    // const objOneRef = ref({
    //   name: "张三",
    //   age: 25,
    // });
    const objOneUnRef = unref(objOneRef);
    console.log(
      "zn-ref",
      objOneRef,
      objOneUnRef,
      isReactive(objOneUnRef),
      objOneUnRef === refObj
    );

    // toRaw 去掉 reactive 包裹层
    const fromReadOnly = readonly(testObj);
    const fromReadOnlyReactive = readonly(obj);
    const fromReadOnlyRef = readonly(objOne);

    const fromReadOnlyRes = isProxy(fromReadOnly);
    const fromReadOnlyReactiveRes = isProxy(fromReadOnlyReactive);
    const fromReadOnlyRefRes = isProxy(fromReadOnlyRef);
    const fromRes = isProxy(objOne);
    const froReactive = isProxy(obj);

    console.log(
      fromReadOnlyRes,
      fromReadOnlyReactiveRes,
      fromReadOnlyRefRes,
      froReactive,
      fromRes,
      "result"
    );

    // eslint-disable-next-line no-unused-vars
    const testReadOnly = isReactive(fromReadOnly);

    const testReadOnlyReactive = isReactive(fromReadOnlyReactive);
    const testReadOnlyRef = isReactive(fromReadOnlyRef);
    const testRef = isReactive(objOne);
    const testReactive = isReactive(obj);

    console.log(
      testReadOnlyReactive,
      testReactive,
      testRef,
      testReadOnlyRef,
      "result-Reactive"
    );



    const toRawOne = toRaw(obj);
    const toRawTwo = toRaw(objOne);
    console.log(toRawOne, toRawTwo, objOne, "还原值");

    const newObj = { a: 1 };
    const newObjOne = { a: 1 };

    const markRawObj = markRaw(newObj);

    const mydata = reactive(markRawObj);
    const mydataOne = reactive(newObjOne);

    console.log(mydata, mydataOne, "myData");

    // console.log(fromObj, fromObjTwo, 'wo')

    console.log(testObj, "xy值");
    console.log(objOne, "xy值");

    // toRef  为某个对象上的属性做响应式

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

    onMounted(() => {
      getList("123");
    });

    provide("count", count);
    provide("obj", objOne);
    provide("location", "location的值");
    const original = reactive({ count: 0 });

    const copy = readonly(original);
    console.log(original.count, "1", "zn-original");
    console.log(copy.count, "2", "zn-original");

    console.log(copy.count, "3", "zn-original");
    original.count++;
    copy.count++;

    const state = reactive({
      foo: 1,
      bar: 2,
      three: {
        a:1
      }
    });

    const stateAsRefs = toRefs(state);
        /*
    stateAsRefs 的类型:

    {
      foo: Ref<number>,
      bar: Ref<number>
    }
    */
    console.log(stateAsRefs, 'zn-toRefs')
    // ref 和原始 property 已经“链接”起来了
    state.foo++;
    console.log(stateAsRefs.foo.value, 'zn-toRefs'); // 2

    stateAsRefs.foo.value++;
    console.log(state.foo, 'zn-toRefs'); // 3
    state.three.a++
    console.log(stateAsRefs.three.value.a, '666','zn-toRefs'); // 3


    // original.count++

    watchEffect(
      () => {
        // console.log("LeftCOntent中的watchEffect执行了");
 
      },
      { flush: "post" }
    );

    return {
      getList,
      list,
      listRef,
      testObj,
      obj,
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
    // console.log("LeftContent组件", this.$translate("hi", i18nStrings));
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
  flex-direction: column;
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