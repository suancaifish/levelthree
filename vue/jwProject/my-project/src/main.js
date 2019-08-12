import Vue from 'vue'
import App from './App.vue'
import router from './router'

//轮播图样式
import "./style/swpier.css";


// 全局引入
import axios from 'axios'
import './javaScript/rem'

// Vue继承axios
Vue.prototype.$axios = axios

Vue.config.productionTip = false

import Vant from './vants/index';
Vant();

import Antds from './Antds/index';
import store from './store'
Antds();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')