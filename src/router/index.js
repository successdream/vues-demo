import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes.js'
import { getLocalStorage  } from '@/utils'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from) => {
  const token = getLocalStorage('token');
  console.log(to, from, 'm')
  if(!token && to.path !== '/login') {
    // next()
    return { 
      path: '/login',
      query: {
        toPath: to.path || '123'
      }
    }
  } else {
    // next({
    //   path: '/login',
    // })
    return true;
  }

})
  // console.log('router', router)
  export default router