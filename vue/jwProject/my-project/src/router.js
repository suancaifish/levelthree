import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Tabbar/Home.vue'
import Tabbar from './views/Tabbar.vue'
import Directory from './views/Tabbar/Directory.vue'
import User from './views/Tabbar/User.vue'
import Details from './views/Details';

Vue.use(Router)

export default new Router({
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
        }
      ]
    }, {
      path: '/directory',
      name: 'directory',
      component: Directory
    }, {
      path: '/details',
      name: 'details',
      component: Details
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