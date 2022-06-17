import {
    FacebookOutlined,
    GithubOutlined,
    GoogleOutlined,
    LockOutlined,
    UserOutlined
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import './Login.css'
import { useAppDispatch, useAppSelector } from 'app/hook';
import { authSelector, login } from './authSlice';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const sunmitt = async (values: any) => {
        await dispatch(login(values))
            .then((result) => {
                if (result.meta.requestStatus === "fulfilled") {
                    navigate('/home')
                }
                else if (result.meta.requestStatus === 'rejected') {
                    navigate('/login')
                }
            });
    };

    return (
        <body>
            <div className="login-container">
                <h1>Login</h1>
                <Form
                    name="formLogin"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={sunmitt}
                >
                    <Form.Item
                        className="form-item"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input className="input-filed" type='email' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Enter your email" />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="passwordHash"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            className="input-filed"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Enter your password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox style={{ color: 'white' }}>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <a href="/register"> Or register now!</a>
                    </Form.Item>
                </Form>
                <div className="iconGroup">
                    <FacebookOutlined type="link" className="icon-login" />
                    <GithubOutlined className="icon-login" />
                    <GoogleOutlined className="icon-login" />
                </div>
            </div>

        </body>
    );
}

export default Login;