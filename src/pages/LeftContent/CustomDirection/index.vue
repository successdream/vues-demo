<template>
  <div class="customDirection">
    <input type="text" v-model="pinPadding" />
    <p class="topTitle" v-pin:[direnction]="pinPadding"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pinPadding: 50,
      direnction:{
        a: 'top',
        b: '123'
      },
    };
  },
  directives: {
    pin: {
        // eslint-disable-next-line no-unused-vars
        mounted(el, pinPadding) {
            // console.log(el, pinPadding, 'directives', 'mounted' , pinPadding.arg.a, pinPadding.arg.b, pinPadding.value);
           

        },
        // eslint-disable-next-line no-unused-vars
        updated(el, pinPadding) {
            // console.log(el, pinPadding, 'directives', 'updated',  pinPadding.arg.a, pinPadding.arg.b,pinPadding.value );

        }
    }
  },
  components: {},

  computed: {},

  methods: {},
};
</script>

<style lang='less' scoped>
</style>