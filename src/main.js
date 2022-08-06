import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/common.less';
import './style/element-variables.less'
import '@/assets/fonts/iconfont.css'
// import './style/currentPublic.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import i18n from '@/utils/plugins/i18n.js'
import store from './Store';
import '@/permission.js'
import rem from './utils/rem';
rem()

const app = createApp(App)

// app.use(i18n, i18nStrings )
app.use(store)

app.config.errorHandler = (err, vm, info) => {
    console.log(err, vm, info, 'znErr')
    // 处理错误
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  }

app.use(router).use(ElementPlus).mount('#app')
