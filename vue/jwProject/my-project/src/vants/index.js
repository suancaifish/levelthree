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
    Tabs,
    //user用到的组件
    Row,
    Col,
    Cell,
    CellGroup,
    //购物车组件
    Tag,
    Toast,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    //弹出层
    Popup,
    // 短信输入框
    Field,
    // 分割线
    Divider,
    //文字提醒
    //粘性布局
    Sticky,
    SubmitBar 

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
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Cell);
    Vue.use(CellGroup);
    Vue.use(Tag);
    Vue.use(Toast);
    Vue.use(GoodsAction);
    Vue.use(GoodsActionIcon);
    Vue.use(GoodsActionButton);
    Vue.use(Popup);
    Vue.use(Field);
    Vue.use(Divider);
    Vue.use(Sticky);
    Vue.use(SubmitBar);

}