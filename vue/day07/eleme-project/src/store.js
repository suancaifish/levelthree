import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: 'huahua',
        num: 9,
        age: 22,
        author: 'baba',
        province: '北京市',
        city: '北京市',
        county: '东城区'
    },
    mutations: {
        getNum(state) {
            state.num = 789
        }
    },
    actions: {
        getNum(context) {
            context.commit('getNum')
        }
    },
    getters: {
        getName(state) {
            return state.name + 'fafa'
        }
    }
})


export default store