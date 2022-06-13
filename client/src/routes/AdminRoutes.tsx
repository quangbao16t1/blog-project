import { Link, Route, Routes, useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    SnippetsOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Switch } from 'antd';
import './AdminRoutes.css';
const SubMenu = Menu.SubMenu;
const { Content, Footer, Sider, Header } = Layout;


const AdminRoutes = () => {
    let arrayPath = useLocation().pathname.replace("/", "").split("/")
    const pathList: any = {
        user: { name: "user", value: 1 },
        post: { name: "post", value: 2 },
    }
    arrayPath.shift()

    const pathName = arrayPath.map(item => {
        return pathList[item]
    })
    const defaultSelectedKey = [...pathName]?.pop()?.value || 1

    console.log(defaultSelectedKey)
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const [theme, setTheme] = useState<any>("dark");

    const changeTheme = (value: any) => {
        setTheme(value ? "dark" : "light");
    };
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider
                theme={theme}
                trigger={null}
                width={190}
                collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "sticky",
                    top: 0,
                    left: 0
                }}>

                <div className="logo-admin my-3" >
                    <Link to="/" className="logo d-flex justify-content-center" title="Trạm Tabo">
                        <img
                            className=""
                            style={{ height: "45px" }}
                            src="//bizweb.dktcdn.net/100/377/398/themes/755909/assets/logo.png?1649394240577"
                            alt="logo Trạm Tabo"
                        />
                    </Link>
                </div>
                <Menu theme={theme} defaultSelectedKeys={[`${defaultSelectedKey}`]} mode="inline"
                    style={{
                    }}>
                    <Menu.Item key="1">
                        <Link to="/admin/user" className="nav-text">
                            <span className='d-flex align-items-center fs-5'>
                                <UserOutlined style={{ fontSize: '20px' }} />
                                <span>User</span>
                            </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/admin/post" className="nav-text">
                            <span className='d-flex align-items-center fs-5'>
                                <SnippetsOutlined style={{ fontSize: '20px' }} />
                                <span>Post</span>
                            </span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span className='d-flex align-items-center  nav-text fs-5'>
                                <PieChartOutlined style={{ fontSize: '20px' }} />
                                <span>Biểu đồ</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">
                            <Link to="/">Chart 1</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/">Chart 2</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                <div className="switch-theme">
                    <div className='switcher'>
                        <Switch
                            checked={theme === "dark"}
                            onChange={changeTheme}
                            checkedChildren="Dark"
                            unCheckedChildren="Light"
                        />
                    </div>
                </div>
            </Sider>
            <Layout className="site-layout" >
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {collapsed ? (
                        <MenuUnfoldOutlined className="trigger" onClick={toggle} />
                    ) : (
                        <MenuFoldOutlined className="trigger" onClick={toggle} />
                    )}
                    <div className="account">
                        <h2>
                            Hi, UserName
                        </h2>
                        <div className="avatar">
                            <div className="avatar-img">
                                <img
                                />
                                {/* <button
                                        className="logout"
                                    >
                                        <span>Logout</span>
                                    </button> */}
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            marginTop: 20,
                            marginBottom: 12,
                        }}>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                        {pathName.map((item, index) => {
                            return (
                                <Breadcrumb.Item key={index} >{item.name}</Breadcrumb.Item>
                            )
                        })}
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                            backgroundColor: "#fff"
                        }}
                    >
                        <Routes>
                            <Route index element={<></>} />
                            <Route
                                path="/user"
                                element={<></>}
                            ></Route>
                            <Route
                                path="/post"
                                element={<></>}
                            ></Route>
                            <Route path='/chart'>
                                <Route
                                    path="chart1"
                                    element={<></>}
                                ></Route>
                                <Route
                                    path="chart2"
                                    element={<></>}
                                ></Route>
                            </Route>
                        </Routes>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    <div className="copyright">
                        <p>Copyright &copy; 2022</p>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminRoutes;