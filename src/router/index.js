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
            },
            {
                path: '/newproducts',
                name: 'NewProducts',
                meta: {
                    title: '实时数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "newproducts" */ '../views/Home/NewProducts')
            },
            {
                path: '/stroll',
                name: 'Stroll',
                meta: {
                    title: ''
                },
                component: () =>
                    import ( /* webpackChunkName: "stroll" */ '../views/Home/Stroll')
            },
            {
                path: '/shoppingcart',
                name: 'ShoppingCart',
                meta: {
                    title: '实时数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "shoppingcart" */ '../views/Home/ShoppingCart')
            },
            {
                path: '/my',
                name: 'My',
                meta: {
                    title: '实时数据'
                },
                component: () =>
                    import ( /* webpackChunkName: "my" */ '../views/Home/My')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router