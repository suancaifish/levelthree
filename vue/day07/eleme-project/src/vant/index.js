import Vue from 'vue'
//搜索
import {
    Search,
    //宫格
    Grid,
    GridItem,
    //轮播
    Swipe,
    SwipeItem,
    //分割线
    Divider,
    //下拉菜单
    DropdownMenu,
    DropdownItem,
    //标签栏
    Tabbar,
    TabbarItem,
    Field,
    // 地址编辑
    Area,
    //导航栏
    NavBar

} from 'vant';


export default () => {
    Vue.use(Search);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Divider);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Grid).use(GridItem);
    Vue.use(Field);
    Vue.use(Area);
    Vue.use(NavBar);
}