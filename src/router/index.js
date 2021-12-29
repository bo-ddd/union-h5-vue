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
            title: '实时数据',
            icon: 'search'
        },
        component: () =>
            import( /* webpackChunkName: "homepage" */ '../views/Home/HomePage'),
        children: [{
            path: "/home/first",
            name: 'first',
            meta: {
                title: '首页'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/first.vue')

        }, {
            path: "/home/second",
            name: 'second',
            meta: {
                title: '手机'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/second.vue')

        }, {
            path: "/home/fouth",
            name: 'fouth',
            meta: {
                title: '生活'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/fouth.vue')

        }, {
            path: "/home/third",
            name: 'third',
            meta: {
                title: '箱包'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/third.vue')

        }, {
            path: "/home/fifth",
            name: 'fifth',
            meta: {
                title: '数码'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/fifth.vue')

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
            import( /* webpackChunkName: "newproducts" */ '../views/Home/NewProducts/NewProducts'),
        children:[
            {path:"/newproducts/select",name:"Select",meta:{title:"精选"},component:()=>import(/*webpackChunkName:"Select" */ '@/views/Home/NewProducts/Select.vue')},
            {path:"/newproducts/phone",name:"Phone",meta:{title:"手机"},component:()=>import(/*webpackChunkName:"Phone" */ '@/views/Home/NewProducts/Phone.vue')},
            {path:"/newproducts/computer",name:"Computer",meta:{title:"电脑数码"},component:()=>import(/*webpackChunkName:"Computer" */ '@/views/Home/NewProducts/Computer.vue')},
            {path:"/newproducts/play",name:"Play",meta:{title:"潮玩"},component:()=>import(/*webpackChunkName:"Play" */ '@/views/Home/NewProducts/Play.vue')},
            {path:"/newproducts/electrical",name:"Electrical",meta:{title:"家电"},component:()=>import(/*webpackChunkName:"Electrical" */ '@/views/Home/NewProducts/Electrical.vue')},
            {path:"/newproducts/beauty",name:"Beauty",meta:{title:"美妆"},component:()=>import(/*webpackChunkName:"Beauty" */ '@/views/Home/NewProducts/Beauty.vue')},
            {path:"/newproducts/clothes",name:"Clothes",meta:{title:"服饰"},component:()=>import(/*webpackChunkName:"Clothes" */ '@/views/Home/NewProducts/Clothes.vue')},
            {path:"/newproducts/supermarket",name:"Supermarket",meta:{title:"超市"},component:()=>import(/*webpackChunkName:"Supermarket" */ '@/views/Home/NewProducts/Supermarket.vue')},
            {path:"/newproducts/outdoorsports",name:"Outdoorsports",meta:{title:"运动户外"},component:()=>import(/*webpackChunkName:"Outdoorsports" */ '@/views/Home/NewProducts/Outdoorsports.vue')},
        ]
    },
    {
        path: '/stroll',
        name: 'Stroll',
        meta: {
            title: '',
            icon: 'search'
        },
        component: () =>
            import( /* webpackChunkName: "stroll" */ '../views/Home/Stroll')
    },
    {
        path: '/shoppingcart',
        name: 'ShoppingCart',
        meta: {
            title: '实时数据',
            icon: 'search'
        },
        component: () =>
            import( /* webpackChunkName: "shoppingcart" */ '../views/Home/ShoppingCart')
    },
    {
        path: '/my',
        name: 'My',
        meta: {
            title: '我的',
            icon: 'search'
        },
        component: () => import( /* webpackChunkName: "my" */ '../views/Home/My'),
    },
    ]

},
{
    path: '/payment',
    name: 'Payment',
    component: () => import( /*webpackChunkName: "payMent "*/ '../views/Payment/Payment.vue'),
    children: [{
        path: '/payment/obligation',
        name: 'Obligation',
        meta: {
            icon: "credit-pay",
            title: '待付款'
        },
        component: () => import(/* webpackChunkName :'Obligation' */ '../views/Payment/Obligation.vue')
    },
    {
        path: '/payment/waitreceiving',
        name: 'Waitreceiving',
        meta: {
            icon: "logistics",
            title: '待收货'
        },
        component: () => import(/* webpackChunkName :'Waitreceiving' */ '../views/Payment/Waitreceiving.vue')
    },
    {
        path: '/payment/remainevaluated',
        name: 'Remainevaluated',
        meta: {
            icon: "edit",
            title: '待评价'
        },
        component: () => import(/* webpackChunkName :'Remainevaluated' */ '../views/Payment/Remainevaluated.vue')
    },
    {
        path: '/payment/aftersale',
        name: 'Aftersale',
        meta: {
            icon: "after-sale",
            title: '退换/售后'
        },
        component: () => import(/* webpackChunkName :'Aftersale' */ '../views/Payment/Aftersale.vue')

    },
    {
        path: '/payment/myorder',
        name: 'Myorder',
        meta: {
            icon: "records",
            title: '我的订单'
        },
        component: () => import(/* webpackChunkName :'Myorder' */ '../views/Payment/Myorder.vue')
    }]
},
{
    path: 'setting',
    name: 'Setting',
    component: () => import(/*webpackChunkName:"Setting" */ '@/views/Setting.vue')
}
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router