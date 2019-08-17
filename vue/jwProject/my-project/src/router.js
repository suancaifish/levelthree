import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Tabbar/Home.vue'
import Tabbar from './views/Tabbar.vue'
import Directory from './views/Tabbar/Directory.vue'
import User from './views/Tabbar/User.vue'
import Details from './views/Details.vue';
import Details02 from './views/Details02.vue';
import Login from './views/Login.vue';
import Search from './views/Search.vue';
import Cart from './views/Cart.vue';
import Store from './store'

Vue.use(Router)

const routers = new Router({
  // mode: 'history',
  routes: [{
      path: '/tabbar',
      name: 'tabbar',
      component: Tabbar,
      children: [{
          path: 'home',
          name: 'home',
          component: Home
        }, {
          path: 'directory',
          name: 'directory',
          component: Directory
        },
        {
          path: 'user',
          name: 'user',
          component: User
        },
        { //购物车
          path: 'Cart',
          name: 'Cart',
          component: Cart
        }
      ]
    }, {
      path: '/directory',
      name: 'directory',
      component: Directory
    }, { //详情页
      path: '/details/:id/:id2',
      name: 'details',
      component: Details
    }, {
      path: '/Details02/:id',
      name: 'Details02',
      component: Details02
    }, { //登录页
      path: '/Login',
      name: 'Login',
      component: Login
    }, { //搜索页面
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      //重定向
      path: '/',
      redirect: () => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
        return '/tabbar/home'
      }
    }
  ]
})

// 路由守卫
routers.beforeEach((to, from, next) => {
  // console.log(from);
  let states = Store.state.loginState;
  if (to.path == '/tabbar/Cart' && states == '立即登录') {
    routers.push({
      name: 'Login'
    });
  } else {
    // Router.push('/Login')
    next();

  }

})


export default routers;