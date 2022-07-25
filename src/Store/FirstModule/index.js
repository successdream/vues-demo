export const store = {
    state: () => {
        return {
            firstCount: 100,
        }
    },
    mutations: {
        changeFirstCount(state, data) {
            state.firstCount = state.firstCount + 10
        },
        changeSecondCount(state, data) {
            state.secondCount = state.secondCount + 20
        }
    },

    getters: {
        doubleFirstCount(state, getters, rootState) {
            console.log(state, getters, rootState)
        }
    },
    actions: {
        changeFirstCountActions({ state, commit, rootState }) {
            console.log(state, commit, rootState)
            commit('changeFirstCount')

        }
    }
}