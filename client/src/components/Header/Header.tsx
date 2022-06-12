import { Button, Layout, Menu, MenuProps, Space } from 'antd';
import 'antd/dist/antd.css';
import './Header.css';
import {
    MailOutlined,
    SnippetsOutlined,
    UserOutlined,
    WechatOutlined,
    HomeOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import girlImg from './girl.jpg';
import logo from './logo.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'app/hook';
import { getProfile } from 'features/Profile/profileSlice';

const Header = (props: any) => {
    const navigate = useNavigate();
    const { Header } = Layout;

    // console.log("HoangNgao: ", props.currentUser);
    const dispatch = useAppDispatch();

    const items: MenuProps['items'] = [
        {
            label: 'Trang Chủ',
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: 'Bài viết',
            key: 'post',
            icon: <MailOutlined />,
        },
        {
            label: 'Thảo Luận',
            key: 'SubMenu',
            icon: <WechatOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        }
    ];
    const [current, setCurrent] = useState('');

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
        if (current === 'home') {
            navigate('/home');
        };
    }

    return (
        <>
            <Layout className="layout">
                <Header className='header'>
                    <div className="logo">
                        <img src={logo} />
                    </div>

                    <div>
                        <Menu
                            className='menu-left'
                            theme="dark"
                            mode="horizontal"
                            items={items}
                            onClick={onClick}
                            selectedKeys={[current]}
                        />
                    </div>
                    {!props.currentUser?.firstName ? <div className='btn-header'>
                        <Space className='btn-header'>
                            <Button type="primary" onClick={() => navigate('/register')}>Sign up</Button>
                            <Button type='primary' onClick={() => navigate('/login')}>Sign in</Button>
                        </Space>
                    </div>
                        : <div className='account'>
                            <p>Hi, {props.currentUser?.firstName} </p>
                            <div className="avatar">
                                <div className="avatar-img">
                                    <img src={girlImg} />
                                    <div className='logout'>
                                        <Button

                                            type='primary'
                                            onClick={() => {
                                                dispatch(getProfile(props.currentUser?.id))
                                                navigate('/profile')
                                            }}
                                        >
                                            <i> <UserOutlined /> </i>
                                            Profile
                                        </Button>
                                        <Button
                                            className='btn-logout'
                                            type='primary'
                                            onClick={() => {
                                                props.logout();
                                                navigate('/login')
                                            }}
                                        >
                                            <i> <LogoutOutlined /> </i>
                                            Logout
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>}

                </Header>
            </Layout>
        </>
    );
}

export default Header;