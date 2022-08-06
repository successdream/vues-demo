import {
    createStore
} from 'vuex';
import { store as firstModule } from './FirstModule';
import { store as secondModule } from './SecondModule';
import autoGetFiles from '@/router/automatic.js'
import router from '@/router';
import routes from '@/router/routes'
import createPersistedState from 'vuex-persistedstate';
import { addDataByName } from "@/utils"
const store = createStore({
    plugins: [createPersistedState({
        storage: window.localStorage
    })],
    state() {
        return {
            count: 70,
            show: false,
            name: '张三',
            user: {
                token: ''
            },
            activeMenu: '',
            routes: [],
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        changeShow(state, show) {
            state.show = show
        },
        changeName(state, name) {
            state.name = name;
        },
        changeUserToken(state, token) {  
            state.user.token = token;
        },
        changeRoutes: (state, routes) => {
            state.routes = routes;
        },
        changeActiveMenu(state, menu) {
            state.activeMenu = menu;
        }
    },
    // 可以修改state的同时，触发页面刷新
    getters: {
        // 双倍count
        dobuleCountGet() {
            // state.count = state.count * 2;
            // return state.count
        },
        // 改变名字 
        // eslint-disable-next-line no-unused-vars
        changeNameGet: (state, getters) => (trueName) => {
            // console.log(state, getters, trueName, 'zn-geeters')
            // state.name = `旧名字：${state.name}, 新名字： ${trueName}`
            // return state.name;
        },

        
    },
    // 异步行为
    actions: {
        incrementAsync (context) {
            context.commit('increment')
        },
        changRoutes({ commit }) {
            const list = autoGetFiles();
            list.forEach((route) => {
                router.addRoute('内容一级', route)
              });
            const notFound = { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/NotFound/index.vue')}
            router.addRoute(notFound)
            const newRoutes = [...routes];
            newRoutes.push(notFound)

            const newData = addDataByName({
                data:routes,
                name: '内容一级',
                addData: list

            });
            commit('changeRoutes',  newData)
        }
    },
    modules: {
        firstModule,
        secondModule,
    },
})

export function useMyStore() {
    return store;
}


export default store;