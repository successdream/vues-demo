// plugins/i18n.js
export default {
    install: (app, options) => {
      app.config.globalProperties.$translate = (key) => {
        return key.split('.')
          .reduce((o, i) => { if (o) return o[i] }, options)
      }
  
      app.provide('i18n', options)
  
      app.directive('my-directive', {
        mounted (el, binding, vnode, oldVnode) {
          el.style.color=binding.value
        }

      })
  
      app.mixin({
        created() {
          console.log('我是执行的插件的created')
        }

      })
    }
  }