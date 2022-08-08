export const store = {
    state: () => {
        return {
            firstCount: 100,
        }
    },
    mutations: {
        // eslint-disable-next-line no-unused-vars
        changeFirstCount(state, data) {
            state.firstCount = state.firstCount + 10
        },
        // eslint-disable-next-line no-unused-vars
        changeSecondCount(state, data) {
            state.secondCount = state.secondCount + 20
        }
    },

    getters: {
        // eslint-disable-next-line no-unused-vars
        doubleFirstCount(state, getters, rootState) {
            // console.log(state, getters, rootState)
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        changeFirstCountActions({ state, commit, rootState }) {
            // console.log(state, commit, rootState)
            commit('changeFirstCount')

        }
    }
}