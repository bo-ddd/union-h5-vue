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
        path: '/home/first',
        name: 'HomePage',
        meta: {
            title: '首页',
            icon: 'search'
        },
        component: () =>
            import( /* webpackChunkName: "homepage" */ '../views/Home/HomePage/HomePage.vue'),
        children: [{
            path: "/home/first",
            name: 'first',
            meta: {
                title: '首页'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/first.vue')

        }, {
            path: "/home/second",
            name: 'second',
            meta: {
                title: '手机'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/second.vue')

        }, {
            path: "/home/third",
            name: 'third',
            meta: {
                title: '生活'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/third.vue')

        }, {
            path: "/home/fouth",
            name: 'fouth',
            meta: {
                title: '箱包'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/fouth.vue')

        }, {
            path: "/home/fifth",
            name: 'fifth',
            meta: {
                title: '数码'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/fifth.vue')

        },
        {
            path: "/home/fifth",
            name: 'fifth',
            meta: {
                title: '数码'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/fifth.vue')

        },
        {
            path: "/home/fifth",
            name: 'fifth',
            meta: {
                title: '数码'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/fifth.vue')

        },
        {
            path: "/home/fifth",
            name: 'fifth',
            meta: {
                title: '数码'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/fifth.vue')

        },
        {
            path: "/home/fifth",
            name: 'fifth',
            meta: {
                title: '数码'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/fifth.vue')

        },
        {
            path: "/home/fifth",
            name: 'fifth',
            meta: {
                title: '数码'
            },
            component: () =>
                import( /* webpackChunkName: "backList" */ '../views/Home/HomePage/fifth.vue')

        }],
    },
    //新品推荐
    {
        path: '/newproducts',
        name: 'NewProducts',
        meta: {
            title: '精选',
            icon: 'search'
        },
        redirect: "/newproducts/select",
        component: () => import( /* webpackChunkName: "newproducts" */ '../views/Home/NewProducts/NewProducts.vue'),
        children: [
            {
                path: "/newproducts/select",
                name: "Sselect",
                meta: { title: "精选" },
                component: () => import(/*webpackChunkName:"Sselect" */ '@/views/Home/NewProducts/Select/Sselect.vue'),
                redirect: "/newproducts/select/select",
                children: [
                    {
                        path: "/newproducts/select/select",
                        name: "Select",
                        meta: {
                            title: "精选"
                        },
                        component: () => import(/*webpackChunkName:"Select" */ '@/views/Home/NewProducts/Select/Select.vue')
                    },
                    {
                        path: "/newproducts/select/iphone",
                        name: "Iphone",
                        meta: {
                            title: "手机"
                        },
                        component: () => import(/*webpackChunkName:"Iphone" */ '@/views/Home/NewProducts/Select/Iphone.vue')
                    },
                    {
                        path: "/newproducts/select/computer",
                        name: "Computer",
                        meta: {
                            title: "电脑数码"
                        },
                        component: () => import(/*webpackChunkName:"Computer" */ '@/views/Home/NewProducts/Select/Computer.vue')
                    },
                    {
                        path: "/newproducts/select/play",
                        name: "Play",
                        meta: {
                            title: "潮玩"
                        },
                        component: () => import(/*webpackChunkName:"Play" */ '@/views/Home/NewProducts/Select/Play.vue')
                    },
                    {
                        path: "/newproducts/select/electrical",
                        name: "Electrical",
                        meta: {
                            title: "家电"
                        },
                        component: () => import(/*webpackChunkName:"Electrical" */ '@/views/Home/NewProducts/Select/Electrical.vue')
                    },
                    {
                        path: "/newproducts/select/beauty",
                        name: "Beauty",
                        meta: {
                            title: "美妆"
                        },
                        component: () => import(/*webpackChunkName:"Beauty" */ '@/views/Home/NewProducts/Select/Beauty.vue')
                    },
                    {
                        path: "/newproducts/select/clothes",
                        name: "Clothes",
                        meta: {
                            title: "服饰"
                        },
                        component: () => import(/*webpackChunkName:"Clothes" */ '@/views/Home/NewProducts/Select/Clothes.vue')
                    },
                    {
                        path: "/newproducts/select/supermk",
                        name: "Supermk",
                        meta: {
                            title: "超市"
                        },
                        component: () => import(/*webpackChunkName:"Supermk" */ '@/views/Home/NewProducts/Select/Supermk.vue')
                    },
                    {
                        path: "/newproducts/select/outdoorsports",
                        name: "Outdoorsports",
                        meta: {
                            title: "运动户外"
                        },
                        component: () => import(/*webpackChunkName:"Outdoorsports" */ '@/views/Home/NewProducts/Select/Outdoorsports.vue')
                    },
                ]
            },
            {
                path: "/newproducts/trend",
                name: "Trend",
                meta: {
                    title: "趋势"
                },
                component: () => import(/*webpackChunkName:"Trend" */ '@/views/Home/NewProducts/Trend/Trend.vue'),
                children: [
                    {
                        path: "/newproducts/trend/atmosphere",
                        name: "Atmosphere",
                        meta: { title: "气氛美学" },
                        component: () => import(/*webpackChunkName:"Atmosphere" */ '@/views/Home/NewProducts/Trend/Atmosphere.vue')
                    },
                    {
                        path: "/newproducts/trend/blindbox",
                        name: "Blindbox",
                        meta: { title: "盲盒式惊喜" },
                        component: () => import(/*webpackChunkName:"Blindbox" */ '@/views/Home/NewProducts/Trend/Blindbox.vue')
                    },
                    {
                        path: "/newproducts/trend/care",
                        name: "Care",
                        meta: { title: "专属呵护" },
                        component: () => import(/*webpackChunkName:"Care" */ '@/views/Home/NewProducts/Trend/Care.vue')
                    },
                    {
                        path: "/newproducts/trend/diet",
                        name: "Diet",
                        meta: { title: "膳食改善" },
                        component: () => import(/*webpackChunkName:"Diet" */ '@/views/Home/NewProducts/Trend/Diet.vue')
                    },
                    {
                        path: "/newproducts/trend/dressing",
                        name: "Dressing",
                        meta: { title: "穿衣革新" },
                        component: () => import(/*webpackChunkName:"Dressing" */ '@/views/Home/NewProducts/Trend/Dressing.vue')
                    },
                    {
                        path: "/newproducts/trend/green",
                        name: "Green",
                        meta: { title: "绿色时尚" },
                        component: () => import(/*webpackChunkName:"Green" */ '@/views/Home/NewProducts/Trend/Green.vue')
                    },
                    {
                        path: "/newproducts/trend/homestead",
                        name: "Homestead",
                        meta: { title: "宅家运动" },
                        component: () => import(/*webpackChunkName:"Homestead" */ '@/views/Home/NewProducts/Trend/Homestead.vue')
                    },
                    {
                        path: "/newproducts/trend/housework",
                        name: "Housework",
                        meta: { title: "高效家务" },
                        component: () => import(/*webpackChunkName:"Housework" */ '@/views/Home/NewProducts/Trend/Housework.vue')
                    },
                    {
                        path: "/newproducts/trend/luxury",
                        name: "Luxury",
                        meta: { title: "奢侈精致" },
                        component: () => import(/*webpackChunkName:"Luxury" */ '@/views/Home/NewProducts/Trend/Luxury.vue')
                    },
                    {
                        path: "/newproducts/trend/organicorigin",
                        name: "Organicorigin",
                        meta: { title: "有机原产" },
                        component: () => import(/*webpackChunkName:"Organicorigin" */ '@/views/Home/NewProducts/Trend/Organicorigin.vue')
                    },
                    {
                        path: "/newproducts/trend/pets",
                        name: "Pets",
                        meta: { title: "家人化养宠" },
                        component: () => import(/*webpackChunkName:"Pets" */ '@/views/Home/NewProducts/Trend/Pets.vue')
                    },
                    {
                        path: "/newproducts/trend/skincare",
                        name: "Skincare",
                        meta: { title: "专效养肤" },
                        component: () => import(/*webpackChunkName:"Skincare" */ '@/views/Home/NewProducts/Trend/Skincare.vue')
                    },
                    {
                        path: "/newproducts/trend/slowlife",
                        name: "Slowlife",
                        meta: { title: "微醺慢生活" },
                        component: () => import(/*webpackChunkName:"Slowlife" */ '@/views/Home/NewProducts/Trend/Slowlife.vue')
                    },
                    {
                        path: "/newproducts/trend/space",
                        name: "Space",
                        meta: { title: "专属空间" },
                        component: () => import(/*webpackChunkName:"Space" */ '@/views/Home/NewProducts/Trend/Space.vue')
                    },
                    {
                        path: "/newproducts/trend/threedimensional",
                        name: "Threedimensional",
                        meta: { title: "立体精致感" },
                        component: () => import(/*webpackChunkName:"Threedimensional" */ '@/views/Home/NewProducts/Trend/Threedimensional.vue')
                    },
                ]
            },
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
//我的钱包
{
    path:'/wallet',
    name:'Wallet',
    component:()=>import (/*webpackChunkName:'Wallet' */ '../views/Wallet')
},
//订单状态
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
    //我的订单
    {
        path: '/payment/myorder',
        name: 'Myorder',
        meta: {
            icon: "records",
            title: '我的订单'
        },
        component: () => import(/* webpackChunkName :'Myorder' */ '../views/Payment/Myorder.vue')
    },
    {
        path: '/payment/completed',
        name: 'Completed',
        meta: {
            icon: "records",
            title: '已完成'
        },
        component: () => import(/* webpackChunkName :'Myorder' */ '../views/Payment/Myorder.vue')
    },
    
]
},
// 待评价
{
    path: '/payment/remainevaluated',
    name: 'Remainevaluated',
    meta: {
        icon: "edit",
        title: '待评价'
    },
    component: () => import(/* webpackChunkName :'Remainevaluated' */ '../views/Payment/Remainevaluated.vue')
},
//设置
{
    path: '/setting',
    name: 'Setting',
    component: () => import(/*webpackChunkName:"Setting" */ '@/views/Setting.vue')
},
// 退换/售后
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
    path: '/selected',
    name: 'selected',
    component: () => import(/*webpackChunkName:"Selected" */ '@/views/RankList/Selected.vue')
},
{
    path: '/FindGoods',
    name: 'FindGoods',
    component: () => import(/*webpackChunkName:"FindGoods" */ '@/views/FindGoods/FindGoodsHome.vue')
},
//分类
{
    path: '/classifHome',
    name: 'ClassifHome',
    component: () => import(/*webpackChunkName:"ClassifHome" */ '@/views/Classif/ClassifHome.vue') 
},
//排行榜
{
    path: '/rankHome',
    name: 'RankHome',
    children: [
        {
            path: '/rankHome/selected',
            name: 'Selected',
            meta: {
                title: '精选'
            },
            component: () => import(/*webpackChunkName:"selected" */ '@/views/RankList/Selected.vue')
        },
        {
            path: '/rankHome/jinbang',
            name: 'Jinbang',
            meta: {
                title: '金榜'
            },
            component: () => import(/*webpackChunkName:"jinbang" */ '@/views/RankList/Jinbang.vue')
        },

    ],
    component: () => import(/*webpackChunkName:"rankHome" */ '@/views/RankList/RankHome.vue') 
},
//发现好货
{
    path:'/findGoodsHome',
    name:'FindGoodsHome',
    component: () => import(/*webpackChunkName:"findGoodsHome" */ '@/views/FindGoods/FindGoodsHome.vue')   
},
{
    path:'/my/selfCenter',
    name:'SelfCenter',
    component: () => import( /* webpackChunkName: "selfCenter" */ '../views/Home/SelfCenter.vue'),
},
//拍拍二手
{
    path:'/PaiHome',
    name:'PaiHome',
    component: () => import(/*webpackChunkName:"PaiHome" */ '@/views/PaiUsed/PaiHome.vue')
}
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router