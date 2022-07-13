import {
    createStore
} from 'vuex';
const store = createStore({
    state() {
        return {
            count: 70,
            show: false,
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        changeShow(state, show) {
            state.show = show
        }
    }
})
export default store;