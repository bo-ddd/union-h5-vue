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

        }],
    },
    {
        path: '/newproducts/select',
        name: 'NewProducts',
        meta: {
            title: '实时数据',
            icon: 'search'
        },
        // redirect:"/newproducts/select",
        component: () =>
            import( /* webpackChunkName: "newproducts" */ '../views/Home/NewProducts/NewProducts'),
        children:[
            {path:"/newproducts/select",name:"Select",meta:{title:"精选"},component:()=>import(/*webpackChunkName:"Select" */ '@/views/Home/NewProducts/Select.vue')},
            {path:"/newproducts/iphone",name:"Iphone",meta:{title:"手机"},component:()=>import(/*webpackChunkName:"Iphone" */ '@/views/Home/NewProducts/Iphone.vue')},
            {path:"/newproducts/computer",name:"Computer",meta:{title:"电脑数码"},component:()=>import(/*webpackChunkName:"Computer" */ '@/views/Home/NewProducts/Computer.vue')},
            {path:"/newproducts/play",name:"Play",meta:{title:"潮玩"},component:()=>import(/*webpackChunkName:"Play" */ '@/views/Home/NewProducts/Play.vue')},
            {path:"/newproducts/electrical",name:"Electrical",meta:{title:"家电"},component:()=>import(/*webpackChunkName:"Electrical" */ '@/views/Home/NewProducts/Electrical.vue')},
            {path:"/newproducts/beauty",name:"Beauty",meta:{title:"美妆"},component:()=>import(/*webpackChunkName:"Beauty" */ '@/views/Home/NewProducts/Beauty.vue')},
            {path:"/newproducts/clothes",name:"Clothes",meta:{title:"服饰"},component:()=>import(/*webpackChunkName:"Clothes" */ '@/views/Home/NewProducts/Clothes.vue')},
            {path:"/newproducts/supermk",name:"Supermk",meta:{title:"超市"},component:()=>import(/*webpackChunkName:"Supermk" */ '@/views/Home/NewProducts/Supermk.vue')},
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
},
{
    path: 'selected',
    name: 'selected',
    component: () => import(/*webpackChunkName:"Selected" */ '@/views/RankList/Selected.vue')
},
//分类
{
    path: '/classifHome',
    name: 'ClassifHome',
    meta:{
        title:"分类"
    },
    children:[
        {
            path:'/classifHome/recommendedClassif',
            name:'RecommendedClassif',
            meta:{
                title:'推荐分类'
            },
            component: () => import(/*webpackChunkName:"recommendedClassif" */ '@/views/Classif/RecommendedClassif.vue')   
        },
        {
            path:'/classifHome/supermarket',
            name:'Supermarket',
            meta:{
                title:'京东超市'
            },
            component: () => import(/*webpackChunkName:"supermarket" */ '@/views/Classif/Supermarket.vue')   
        },
        {
            path:'/classifHome/furnitureHome',
            name:'FurnitureHome',
            meta:{
                title:'家具家装'
            },
            component: () => import(/*webpackChunkName:"furnitureHome" */ '@/views/Classif/FurnitureHome.vue')   
        },
        {
            path:'/classifHome/jDInternational',
            name:'JDInternational',
            meta:{
                title:'京东国际'
            },
            component: () => import(/*webpackChunkName:"jDInternational" */ '@/views/Classif/JDInternational.vue')   
        },
        {
            path:'/classifHome/computerOffice',
            name:'ComputerOffice',
            meta:{
                title:'电脑办公'
            },
            component: () => import(/*webpackChunkName:"computerOffice" */ '@/views/Classif/ComputerOffice.vue')   
        },
        {
            path:'/classifHome/footwear',
            name:'Footwear',
            meta:{
                title:'鞋靴'
            },
            component: () => import(/*webpackChunkName:"footwear" */ '@/views/Classif/Footwear.vue')   
        },
        {
            path:'/classifHome/watchJewelry',
            name:'WatchJewelry',
            meta:{
                title:'钟表珠宝'
            },
            component: () => import(/*webpackChunkName:"watchJewelry" */ '@/views/Classif/WatchJewelry.vue')   
        },
        {
            path:'/classifHome/foodWine',
            name:'FoodWine',
            meta:{
                title:'食品酒饮'
            },
            component: () => import(/*webpackChunkName:"foodWine" */ '@/views/Classif/FoodWine.vue')   
        },
        {
            path:'/classifHome/careCleaning',
            name:'CareCleaning',
            meta:{
                title:'个护清洁'
            },
            component: () => import(/*webpackChunkName:"careCleaning" */ '@/views/Classif/CareCleaning.vue')   
        },
        {
            path:'/classifHome/menWear',
            name:'MenWear',
            meta:{
                title:'男装'
            },
            component: () => import(/*webpackChunkName:"menWear" */ '@/views/Classif/MenWear.vue')   
        },
        {
            path:'/classifHome/appliances',
            name:'Appliances',
            meta:{
                title:'家电'
            },
            component: () => import(/*webpackChunkName:"appliances" */ '@/views/Classif/Appliances.vue')   
        },
        {
            path:'/classifHome/householdKitchenware',
            name:'HouseholdKitchenware',
            meta:{
                title:'家居厨具'
            },
            component: () => import(/*webpackChunkName:"householdKitchenware" */ '@/views/Classif/HouseholdKitchenware.vue')   
        },
        {
            path:'/classifHome/phone',
            name:'Phone',
            meta:{
                title:'手机'
            },
            component: () => import(/*webpackChunkName:"phone" */ '@/views/Classif/Phone.vue')   
        },
        {
            path:'/classifHome/underwearAccessories',
            name:'UnderwearAccessories',
            meta:{
                title:'内衣配饰'
            },
            component: () => import(/*webpackChunkName:"underwearAccessories" */ '@/views/Classif/UnderwearAccessories.vue')   
        },
        {
            path:'/classifHome/mBclothes',
            name:'MBclothes',
            meta:{
                title:'母婴童装'
            },
            component: () => import(/*webpackChunkName:"mBclothes" */ '@/views/Classif/MBclothes.vue')   
        },
    ],
    component: () => import(/*webpackChunkName:"ClassifHome" */ '@/views/Classif/ClassifHome.vue') 
},
//排行榜
{
    path:'/rankHome',
    name:'RankHome',
    children:[
        {
            path:'/rankHome/selected',
            name:'Selected',
            meta:{
                title:'精选'
            },
            component: () => import(/*webpackChunkName:"selected" */ '@/views/RankList/Selected.vue') 
        },
        {
            path:'/rankHome/jinbang',
            name:'Jinbang',
            meta:{
                title:'金榜'
            },
            component: () => import(/*webpackChunkName:"jinbang" */ '@/views/RankList/Jinbang.vue') 
        },

    ],
    component: () => import(/*webpackChunkName:"rankHome" */ '@/views/RankList/RankHome.vue') 
}
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router