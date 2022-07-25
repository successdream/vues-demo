import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/common.css';
import './style/currentPublic.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import i18n from '@/utils/plugins/i18n.js'
import store from './Store';
// import '@/permission.js'

// const i18nStrings = {
//     hi: 'Hallo!'
//   }
const app = createApp(App)

// app.use(i18n, i18nStrings )
app.use(store)


app.use(router).use(ElementPlus).mount('#app')
