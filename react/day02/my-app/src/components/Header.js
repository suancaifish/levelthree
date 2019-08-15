import React, {
    Component
} from 'react'

import {
    Layout,
    Menu,
    Breadcrumb,
    Icon
} from 'antd';

const {
    Header,
    Content,
    Footer,
    Sider
} = Layout;
const {
    SubMenu
} = Menu;

export default class HeaderLay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '千锋',
            collapsed: false
        }
    }
    onCollapse = collapsed => {
        // console.log(collapsed);
        this.setState({
            collapsed
        });
    };
    onBreakpoint = (broken) => {
       
    }
    render() {
        return (

            <div >

                <Layout style={{ minHeight: '100vh', background: '#fff' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ background: '#fff' }}>
                        <div className="logo" />
                        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="0" style={{ background: '#428bca', height: '64px', marginTop: 0 }}>
                                {/* <Icon type="pie-chart" />
                                <span></span> */}
                            </Menu.Item>

                            <SubMenu
                                key="sub1"
                                title={
                                    <span style={{ color: '#2B7DBC', fontSize: '13px', fontWeight: 'bold' }}>
                                        <Icon type="user" />
                                        <span>学员后台</span>
                                    </span>
                                }
                            >

                            {['匿名投诉','技术问题','项目上传','VIP','学员周报','我的资料','交费明细','参加考试','学员评价','教学测评'].map((item,index)=>{
                                return (
                                    <Menu.Item key={index}>{item}</Menu.Item>
                                )
                            })}
                                <Menu.Item key="3" >匿名投诉</Menu.Item>
                                {/* <Menu.Item key="4">技术问题</Menu.Item>
                                <Menu.Item key="5">项目上传</Menu.Item>
                                <Menu.Item key="6">VIP</Menu.Item>
                                <Menu.Item key="7">学员周报</Menu.Item>
                                <Menu.Item key="8">我的资料</Menu.Item>
                                <Menu.Item key="9">交费明细</Menu.Item>
                                <Menu.Item key="10">参加考试</Menu.Item>
                                <Menu.Item key="11">学员评价</Menu.Item>
                                <Menu.Item key="12">教学测评</Menu.Item> */}


                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="barcode" />
                                        <span>学员考勤</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6">学员请假</Menu.Item>
                                <Menu.Item key="8">学员违纪</Menu.Item>
                            </SubMenu>

                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#428bca', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>


            </div>
        );
    }
}