import Vue from 'vue'
import App from './App.vue'
import "./index.css"
//全局引入axios
import axios from 'axios';

//Vue继承axios
Vue.prototype.$axios = axios;

//引入路由模块
import router from './router'

//引入vant组件
import Vant from './vant/index'
Vant();
import store from './store'

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App)

}).$mount('#app')