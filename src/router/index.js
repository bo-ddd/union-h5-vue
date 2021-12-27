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
                component:() =>import ( /* webpackChunkName: "homepage" */ '../views/Home/HomePage'),
                meta: {
                    title: '首页',
                    icon: 'search'
                },
                children:[{
                    path:"/home/first",
                    name:'first',
                    meta:{
                        title:'首页'
                    },
                    component: () =>
                    import ( /* webpackChunkName: "backList" */ '../views/first.vue')
    
                },{
                    path:"/home/second",
                    name:'second',
                    meta:{
                        title:'手机'
                    },
                    component: () =>
                    import ( /* webpackChunkName: "backList" */ '../views/second.vue')
    
                },{
                    path:"/home/fouth",
                    name:'fouth',
                    meta:{
                        title:'生活'
                    },
                    component: () =>
                    import ( /* webpackChunkName: "backList" */ '../views/fouth.vue')
    
                },{
                    path:"/home/third",
                    name:'third',
                    meta:{
                        title:'箱包'
                    },
                    component: () =>
                    import ( /* webpackChunkName: "backList" */ '../views/third.vue')
    
                }],
            },
            {
                path: '/newproducts',
                name: 'NewProducts',
                meta: {
                    title: '实时数据',
                    icon: 'search'
                },
                component: () =>
                    import ( /* webpackChunkName: "newproducts" */ '../views/Home/NewProducts')
            },
            {
                path: '/stroll',
                name: 'Stroll',
                meta: {
                    title: '',
                    icon: 'search'
                },
                component: () =>
                    import ( /* webpackChunkName: "stroll" */ '../views/Home/Stroll')
            },
            {
                path: '/shoppingcart',
                name: 'ShoppingCart',
                meta: {
                    title: '实时数据',
                    icon: 'search'
                },
                component: () =>
                    import ( /* webpackChunkName: "shoppingcart" */ '../views/Home/ShoppingCart')
            },
            {
                path: '/my',
                name: 'My',
                meta: {
                    title: '我的',
                    icon: 'search'
                },
                component: () => import ( /* webpackChunkName: "my" */ '../views/Home/My'),
            },
        ]

    },
    {
        path: '/payment',
        name: 'Payment',
        component: () => import ( /*webpackChunkName: "payMent "*/ '../views/Payment.vue'),
    },
    {
        path:'setting',
        name:'Setting',
        component:()=> import(/*webpackChunkName:"Setting" */ '@/views/Setting.vue')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router