import Vue from 'vue'
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

//定义组件
import Tabbar from './views/Tabbar'
import Sign from './views/Sign'
import Address from './views/Address'

//嵌套组件
import Homer from './views/Tabbar/Homer.vue'
//主页
import Mine from './views/Tabbar/Mine.vue'
import Order from './views/Tabbar/Order.vue'
import Find from './views/Tabbar/Find.vue'


//详情页
import Detail from './views/Detail'




const routes = [{
    path: '/tabbar',
    name: 'tabbar',
    component: Tabbar,
    children: [{
      //嵌套路由里面的路径是没有/的
      name: 'homer',
      path: 'homer',
      component: Homer
    }, {
      name: 'mine',
      path: 'mine',
      component: Mine
    }, {
      name: 'order',
      path: 'order',
      component: Order
    }, {
      name: 'find',
      path: 'find',
      component: Find
    }]
  },
  {
    name: 'detail',
    path: '/detail/:id/:name',
    component: Detail
  }, {
    name: 'sign',
    path: '/sign',
    component: Sign,
  }, {
    name: 'address',
    path: '/address',
    component: Address
  },
  {
    //重定向
    path: '/',
    redirect: () => {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
      return '/tabbar/homer'
    }
  }

]
const router = new VueRouter({
  // mode: 'history',
  routes // (缩写) 相当于 routes: routes
})


router.beforeEach((to, from, next) => {
  let islogin = 1;

  // ...
  if (islogin || to.path === '/sign' || to.path === '/tabbar/homer') {
    next();
  } else {
    router.push({
      name: 'sign'
    })

  }
})


export default router