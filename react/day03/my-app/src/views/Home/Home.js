import Nav from '../Menu/Nav';

import React, {
    Component
} from 'react'
import { Route} from "react-router-dom";


import { Layout, Breadcrumb } from 'antd';
// import { Route, Link } from "react-router-dom";

import CryptonymPage from './Cryptonym/CryptonymPage'


// const { SubMenu } = Menu;
const { Content } = Layout;

export default class Home extends Component{
  state={
    menus:[{
        title: '首页',
        url: '/home'
    }, {
        title: '我的',
        url: '/mine'
    }, {
        title: '设置',
        url: '/setting'
    }]
  }
        

    render() {
        return (
                <Layout>
                    <Layout>
                       <Nav/>
                    
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                            >
                            <Route path='/home/CryptonymPage' component={CryptonymPage}></Route>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
        )
    }
}