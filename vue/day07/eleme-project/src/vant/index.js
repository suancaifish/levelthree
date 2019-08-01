import Vue from 'vue'
//搜索
import {
    Search
} from 'vant';
Vue.use(Search);
//宫格
import {
    Grid,
    GridItem
} from 'vant';
//轮播
import {
    Swipe,
    SwipeItem
} from 'vant';
//分割线
import {
    Divider
} from 'vant';
//下拉菜单
import {
    DropdownMenu,
    DropdownItem
} from 'vant';
//标签栏
import {
    Tabbar,
    TabbarItem
} from 'vant';
//登录
import {
    Field
} from 'vant';


export default () => {
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Divider);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Grid).use(GridItem);
    Vue.use(Field);
}