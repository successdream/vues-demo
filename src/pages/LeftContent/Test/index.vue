<template>
  <div>我是test组件</div>
  <!-- <div>Test组件中的{{count}}</div> -->
  <div>Test组件中的通过props给值{{ count }}</div>
  <div>Test组件中通过provide-inject传递的值{{ count }} </div>
  <div>Test 组件中通过 provide-inject 传递的ref修饰的obj {{ JSON.stringify(obj) }}</div>
  <div>Test 组件中通过 provide-inject 传递的reactive修饰的obj {{ JSON.stringify(obj) }}</div>
  <div>Test 组件中通过 provide-injectSetUp 传递的值 {{ injectSetUp }}</div>
  <div>Test 组件中通过 provide-inject 传递的值   {{ location }}</div>
  <div>Test 组件中通过 myMixIn 获取的值 {{  myMixInCount }}</div>
  <div>Test组件中 plugin中提供的值 {{ JSON.stringify(i18n)}}</div>
  


  <!-- <ul>
    <li v-for="(item, index) in currentList" :key="index">
      {{ item.name }} === {{ item.age }}
    </li>
  </ul> -->
</template>

<script>
import { ref, onMounted, watch, toRefs, inject, watchEffect   } from "vue";
import { list } from "@/MockData.js";


export default {
  inject: ['location', 'geolocation', 'obj', 'i18n'],
  props: ["count"],
  // mixins: [myMixin],

  setup(props) {
    // toRefs 装饰过的props,才能在setup中获取到最新值
    const { count } = toRefs(props);

    // console.log(context, 'context')

    // ref 装饰的值才是响应式的值
    let currentList = ref([]);
    const getUserList = () => {
        // console.log(count, 'count')
      setTimeout(() => {
        currentList.value = list;
      }, 2000);
    };

    const injectSetUp =   inject('location')

    onMounted(getUserList)

    watch(
      count,
      (val) => {
        console.log(val, "watch");
      },
    //   { immediate: true }
    );
    // TODO  props 更新 没触发
    watchEffect(() => {
        // console.log('Test中的watchEffect执行了')

    }, { flush: 'post' })

    // computed(() => counter.value * 2, {})

    return {
      // count
      // props
      currentList,
      injectSetUp
    };
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},


  mounted() {
    // console.log('我执行了Test组件中的mounted')
    const i18nStrings = {
    hi: 'Hallo!'
  }
    console.log('Test组件', this.$translate('hi', i18nStrings))

  },
  updated() {
    // console.log('我执行了Test组件中的updated')

  }

};
</script>

<style lang='less' scoped>
</style>