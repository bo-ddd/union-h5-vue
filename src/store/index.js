import Vue from 'vue'
import Vuex from 'vuex'
import { routes } from '@/router'

Vue.use(Vuex)
let getRoutes = function() {
    let defined = ['/', '/registration', '/login'];
    let arr = routes;
    let res = [];
    arr.forEach(item => {
        if (!defined.includes(item.path)) {
            res.push(item)
        }
    })
    return res;
}

export default new Vuex.Store({
    state: {
        routes: getRoutes(),
        offsettop:0
    },
    getters: {
        routes: state => state.routes,
    },
    mutations: {
        OFFSETTOP:(state,payload)=> state.offsettop = payload,
    },
    actions: {},
    modules: {}
})