import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

export const routes = [{
        path: '/',
        name: '/',
        redirect: '/home',
        meta: {
            title: '',
        },
    },

    // 首页路由 
    {
        path: '/home',
        name: 'Home',
        component: Layout,
        meta: {
            title: '首页',
            icon: 'search'
        },
        children: [{
            path: '/home',
            name: 'HomePage',
            meta: {
                title: '实时数据'
            },
            component: () =>
                import ( /* webpackChunkName: "homepage" */ '../views/Home/HomePage')
        }]
    },

    //新品页路由 
    {
        path: '/newproducts',
        name: 'NewProducts',
        component: Layout,
        meta: {
            title: '新品',
            icon: 'el-icon-data-line'
        },
        children: [{
            path: '/newproducts',
            name: 'NewProducts',
            meta: {
                title: '实时数据'
            },
            component: () =>
                import ( /* webpackChunkName: "newproducts" */ '../views/NewProducts/NewProducts')
        }]

    },

    // 逛逛页路由
    {
        path: '/stroll',
        name: 'Stroll',
        component: Layout,
        meta: {
            icon: 'el-icon-data-line'
        },
        children: [{
            path: '/stroll',
            name: 'Stroll',
            meta: {
                title: '实时数据'
            },
            component: () =>
                import ( /* webpackChunkName: "stroll" */ '../views/Stroll/Stroll')
        }]

    },

    // 购物车页面路由
    {
        path: '/shoppingcart',
        name: 'ShoppingCart',
        component: Layout,
        meta: {
            title: '购物车',
            icon: 'el-icon-data-line'
        },
        children: [{
            path: '/shoppingcart',
            name: 'ShoppingCart',
            meta: {
                title: '实时数据'
            },
            component: () =>
                import ( /* webpackChunkName: "shoppingcart" */ '../views/ShoppingCart/ShoppingCart')
        }]

    },

    // 我的页面路由
    {
        path: '/my',
        name: 'My',
        component: Layout,
        meta: {
            title: '我的',
            icon: 'el-icon-data-line'
        },
        children: [{
            path: '/my',
            name: 'My',
            meta: {
                title: '实时数据'
            },
            component: () =>
                import ( /* webpackChunkName: "my" */ '../views/My/My')
        }]

    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router