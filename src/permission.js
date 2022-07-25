import router from '@/router';
import {
  useMyStore
} from '@/Store';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';
import autoGetFiles from '@/router/automatic.js'
const myStore = useMyStore();
NProgress.configure({
  showSpinner: false
})
NProgress.start()
let hasAddRoutes = false;
router.beforeEach((to, from) => {
  // console.log(to, from, myStore.state.user.token, 'zn-router')
  if (!myStore.state.user.token && to.path !== '/login') {
    NProgress.done()
    return {
      path: '/login',
      query: {
        toPath: to.path || '123'
      }
    }

  } else {

    // 此处保证路由已经添加完毕
    if(!hasAddRoutes) {
      const list = autoGetFiles();
      list.forEach((route) => {
        router.addRoute('home', route)
      });
      console.log('getRoutes', 1)
      hasAddRoutes = true;
      // 此处会再次执行 router.forEach
      return{
        ...to, 
        replace: true
      }

    } else {
      console.log('getRoutes', 2)
      NProgress.done()

      return true;
    }


  }

})