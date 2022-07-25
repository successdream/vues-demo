import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes.js'

// import { getLocalStorage  } from '@/utils'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

  // console.log('router', router)
export default router