import './ProfilePage.css'
import girlImg from './girl.jpg';
import { Button, Col, Divider, Input, Modal, Row, Select } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import Form, { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import "antd/dist/antd.css"
import { useAppDispatch, useAppSelector } from 'app/hook';
import { editProfile, profileSelector } from './profileSlice';

interface DescriptionItemProps {
    title: string;
    content: any;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => {
    return (
        <div className="site-description-item-profile-wrapper">
            <p className="site-description-item-profile-p-label">{title}:</p>{content}
        </div>
    )
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const { user, isLoading, error } = useAppSelector(profileSelector);
    const [modal2Visible, setModal2Visible] = useState(false);

    const fullName = user?.firstName + ' ' + user?.lastName;

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const { Option } = Select;
    const [form] = useForm();

    useEffect(() => {
        form.setFieldsValue({
            firstName: user?.firstName, //working
            lastName: user?.lastName,
            email: user?.email,
            gender: user?.gender,
            address: user?.address,
            phoneNumber: user?.phoneNumber,
            roleId: user?.roleId 
        });
    }, [user])

    const handleCancel = () => {
        setModal2Visible(false)
        form.resetFields()
    }

    const handleOk = () => {
        form.submit()
    }

    const onFinish = (value: any) => {
        console.log('Form submited!', value)
        dispatch(editProfile(value))
        setModal2Visible(false)
    }

    return (

        <div className='clear-container'>
            <h1
                className="title-profile"
                style={{
                    marginBottom: '50px',
                }}
            >
                User Profile
            </h1>
            <div className="profile-avatar">
                <img
                    onClick={() => setModal2Visible(true)}
                    src={girlImg}
                    className="card-img-top"
                    alt=""
                />
                <Button onClick={() => setModal2Visible(true)}><FormOutlined /></Button>
                <Modal
                    title="Edit Profile"
                    style={{ marginTop: '50px' }}
                    visible={modal2Visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary" onClick={handleOk}>
                            Edit
                        </Button>,
                    ]}
                >
                    <Form
                        name="formLogin"
                        form={form}
                        onFinish={onFinish}
                        {...formItemLayout}
                        className="login-form"
                        scrollToFirstError
                    >
                        <FormItem
                            label="First Name"
                            className="form-item-name"
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your fist name!',
                                },
                            ]}
                        >
                            <Input className="input-name" placeholder='Enter your first name' />
                        </FormItem>

                        <FormItem
                            className="form-item-name"
                            name="lastName"
                            label="Last Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last name!',
                                },
                            ]}
                        >
                            <Input className="input-name" placeholder='Enter your last name' />

                        </FormItem>

                        <FormItem
                            className="form-item-name"
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input className="input-filed" disabled />
                        </FormItem>

                        <FormItem
                            name="phoneNumber"
                            label="Phone Number"
                            className='form-item-name'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                className="input-name"
                                placeholder='Enter your phone number'
                            />
                        </FormItem>

                        <FormItem
                            className="form-item-name"
                            name="address"
                            label="Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input address!',
                                },
                            ]}
                        >
                            <Input
                                className="input-name"
                                placeholder='Enter your address' />
                        </FormItem>

                        <FormItem label="Gender" required={true} className="form-item-name"  >
                            <Row gutter={8}>
                                <Col span={10}>
                                    <FormItem
                                        name="gender"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select gender!',
                                            },
                                        ]}
                                    >
                                        <Select className="select-filed" placeholder="select your gender">
                                            <Option value="Male">Male</Option>
                                            <Option value="Female">Female</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                            </Row>
                        </FormItem>

                        <FormItem label="Role" required={true} className="form-item-name"  >
                            <Row gutter={8}>
                                <Col span={16}>
                                    <FormItem
                                        name="roleId"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select role!',
                                            },
                                        ]}
                                    >
                                        <Select disabled className="select-filed" placeholder="select your gender">
                                            <Option value={3}>User</Option>
                                            <Option value={1}>Root Admin</Option>
                                            <Option value={2}>Admin</Option>
                                        </Select>
                                    </FormItem>
                                </Col>
                            </Row>
                        </FormItem>
                    </Form>
                </Modal>
            </div>

            <p className="site-description-item-profile-p">Personal</p>
            <Divider />
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Full Name" content={fullName} />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Gender" content={user?.gender} />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Address" content={user?.address} />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Country" content="VietNam🇻🇳🇻🇳" />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Birthday" content="-" />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Website" content="-" />
                </Col>
            </Row>

            <Divider />

            <p className="site-description-item-profile-p">Contacts</p>
            <Row>
                <Col span={12}>
                    <DescriptionItem title="Email" content={user?.email} />
                </Col>
                <Col span={12}>
                    <DescriptionItem title="Phone Number" content={user?.phoneNumber} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Github"
                        content={
                            <a href="https://github.com/quangbao16t1/blog-project">
                                github.com/quangbao16t1/blog-project
                            </a>
                        }
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ProfilePage;