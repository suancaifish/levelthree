import Vue from 'vue'
import App from './App.vue'
import "./index.css"
//全局引入axios
import axios from 'axios';

//Vue继承axios
Vue.prototype.$axios = axios;

import {
  Search
} from 'vant';
Vue.use(Search);

import {
  Grid,
  GridItem
} from 'vant';
import {
  Swipe,
  SwipeItem
} from 'vant';
import {
  Divider
} from 'vant';
import {
  DropdownMenu,
  DropdownItem
} from 'vant';
import {
  Tabbar,
  TabbarItem
} from 'vant';

Vue.use(Tabbar).use(TabbarItem);
Vue.use(DropdownMenu).use(DropdownItem);

Vue.use(Divider);

Vue.use(Swipe).use(SwipeItem);

Vue.use(Grid).use(GridItem);


Vue.config.productionTip = false

//搜索框


new Vue({
  render: h => h(App),
}).$mount('#app')