import {
    createStore
} from 'vuex';
import { store as firstModule } from './FirstModule';
import { store as secondModule } from './SecondModule';

import createPersistedState from 'vuex-persistedstate';
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
            }
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
        }
    },
    // 可以修改state的同时，触发页面刷新
    getters: {
        // 双倍count
        dobuleCountGet(state) {
            // state.count = state.count * 2;
            // return state.count
        },
        // 改变名字 
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