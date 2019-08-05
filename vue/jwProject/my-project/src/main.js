import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

import Vant from './vants/index';
Vant();

import Antds from '../Antds/index';
Antds();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')