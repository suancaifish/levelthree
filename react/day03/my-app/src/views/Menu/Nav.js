import React, {
    Component
} from 'react'
import { Route ,Switch,Link} from "react-router-dom";

import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;




export default class Nav extends Component {
    state = {
        options: [{
            title: '匿名投诉',
            url: '/home/CryptonymPage'
        }, {
            title: '技术问题',
            url: '/1'
        }, {
            title: '项目上传',
            url: '/2'
        }, {
            title: 'VIP',
            url: '/3'
        }, {
            title: '学员周报',
            url: '/4'
        }, {
            title: '我的资料',
            url: '/5'
        }, {
            title: '交费明细',
            url: '/6'
        }, {
            title: '参加考试',
            url: '/7'
        }, {
            title: '学员评价',
            url: '/8'
        }, {
            title: '教学测评',
            url: '/9'
        }]
    }
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="user" />
                                学员后台
                    </span>
                        }
                    >
                        {
                            this.state.options.map((item, index) => {
                                return <Menu.Item key={index}>{item.title}</Menu.Item>
                            })
                        }
                        {/* <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item> */}
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="laptop" />
                                subnav 2
                    </span>
                        }
                    >
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>
        )
    }
}