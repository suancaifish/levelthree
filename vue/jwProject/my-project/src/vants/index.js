import Vue from "vue";
import {
    Search,
    Tabbar,
    TabbarItem,
    Button,
    Icon,
    // 宫格
    Grid,
    GridItem,
    // 轮播
    Swipe,
    SwipeItem,
    Image,
    //导航栏
    NavBar,
    Sidebar,
    SidebarItem,
    //倒计时
    CountDown,
    //标签页
    Tab,
    Tabs
} from "vant";




export default () => {
    //vant
    Vue.use(Search);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Icon);
    Vue.use(Grid).use(GridItem);
    Vue.use(Button);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Grid).use(GridItem);
    Vue.use(Image);
    Vue.use(NavBar);
    Vue.use(Sidebar);
    Vue.use(SidebarItem);
    Vue.use(CountDown);
    Vue.use(Tab).use(Tabs);
}