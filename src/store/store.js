import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        isZero: true
    },

    getters: {
        isZero: state => state.isZero,
        count: state => state.count
    },

    mutations: {
        INCREMENT(state) {
            state.isZero = false;
            state.count++;
        },

        DECREMENT(state) {
            if (state.count > 0) {
                state.count--;

                if (state.count == 0) {
                    state.isZero = true;
                }
            }


        }

    },
    actions: {
        increment(context) {
            context.commit('INCREMENT')
        },
        decrement(context) {
            context.commit('DECREMENT')
        }
    }


})

export default store;
