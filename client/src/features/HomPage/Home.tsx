import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { useEffect, useState } from "react";
import StorageKeys from 'constants/storage-keys'
import { CurrentUser } from "types/auth.type";
import './Home.css'
import { Button, Form, Input } from "antd";
import { Col, Row } from "reactstrap";
import girlImg from '../Profile/girl.jpg';
import { CalendarOutlined, MessageOutlined, SearchOutlined, UserOutlined, WechatOutlined } from "@ant-design/icons";


const Home = () => {

    const [user, setUser] = useState();
    // const userCu = props;
    // console.log(userCu);
    useEffect(() => {
        const bbbbb = localStorage.getItem(StorageKeys.user);
        if (bbbbb) {
            const userJson = (JSON.parse(bbbbb));
            setUser(userJson);
        }
    }, []);

    return (
        <>
            <div className="colorlib-main">
                <Row xs={3}>
                    <Col xs='2' ></Col>
                    <Col xs='8'>
                        <Row xs={2}>
                            <Col xs='8'>
                                <div className="left-container">
                                    <div className="bg-light border">
                                        <div className="blog-entry">
                                            <img className="post-img" src={girlImg}></img>
                                            <div className="text">
                                                <h3 className="post-title"><a href="#">You Can't Blame Gravity for Falling in Love</a></h3>
                                                <div className="meta-wrap">
                                                    <p className="meta">
                                                        <span><CalendarOutlined className="icon-post" />June 28, 2019</span>
                                                        <span><MessageOutlined className="icon-post" />5 Comment</span>
                                                    </p>
                                                </div>
                                                <p className="post-content">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                <p><a href="#" className="btn-custom">Read More <span className="ion-ios-arrow-forward"></span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light border">
                                        <div className="blog-entry">
                                            <img className="post-img" src={girlImg}></img>
                                            <div className="text">
                                                <h3 className="post-title"><a href="#">You Can't Blame Gravity for Falling in Love</a></h3>
                                                <div className="meta-wrap">
                                                    <p className="meta">
                                                        <span><CalendarOutlined className="icon-post" />June 28, 2019</span>
                                                        <span><MessageOutlined className="icon-post" />5 Comment</span>
                                                    </p>
                                                </div>
                                                <p className="post-content">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                <p><a href="#" className="btn-custom">Read More <span className="ion-ios-arrow-forward"></span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-light border">
                                        <div className="blog-entry">
                                            <img className="post-img" src={girlImg}></img>
                                            <div className="text">
                                                <h3 className="post-title"><a href="#">You Can't Blame Gravity for Falling in Love</a></h3>
                                                <div className="meta-wrap">
                                                    <p className="meta">
                                                        <span><CalendarOutlined className="icon-post" />June 28, 2019</span>
                                                        <span><MessageOutlined className="icon-post" />5 Comment</span>
                                                    </p>
                                                </div>
                                                <p className="post-content">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                <p><a href="#" className="btn-custom">Read More <span className="ion-ios-arrow-forward"></span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs='4'>
                                <div className="right-container">
                                    <div className="sidebar-box">
                                        <Form className="search-form">
                                            <Form.Item
                                                className="seach-item"
                                                name="search"
                                                rules={[
                                                    {                               
                                                        required: true,
                                                        message: 'Please enter a keyword!',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    className="input-filed-search"
                                                />
                                            </Form.Item>
                                            <Button className="btn-search-home"><SearchOutlined /></Button>
                                        </Form>
                                    </div>
                                    <div className="sidebar-box catelory">
                                        <h3 className="sidebar-heading">Catelories</h3>
                                        <ul className="categories">
                                            <li>
                                                <a>Fashion<span>(6)</span></a>
                                            </li>
                                            <li>
                                                <a>Fashion<span>(6)</span></a>
                                            </li>
                                            <li>
                                                <a>Fashion<span>(6)</span></a>
                                            </li>
                                            <li> <a>Fashion<span>(6)</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-box popular">
                                        <h3 className="sidebar-heading">Popular Articles</h3>
                                        <div className="box-popular">
                                            <img className="blog-img" src={girlImg}></img>
                                            <div className="text">
                                                <h3 className="heading"><a>Even the all-powerful Pointing has no control</a></h3>
                                                <div className="meta">
                                                    <div><a href="#"><CalendarOutlined className="icon-post" /> June 28, 2019</a></div>
                                                    <div><a href="#"><UserOutlined className="icon-post" /> Dave Lewis</a></div>
                                                    <div><a href="#"><MessageOutlined className="icon-post" /> 19</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-popular">
                                            <img className="blog-img" src={girlImg}></img>
                                            <div className="text">
                                                <h3 className="heading"><a>Even the all-powerful Pointing has no control</a></h3>
                                                <div className="meta">
                                                    <div><a href="#"><CalendarOutlined className="icon-post" /> June 28, 2019</a></div>
                                                    <div><a href="#"><UserOutlined className="icon-post" /> Dave Lewis</a></div>
                                                    <div><a href="#"><MessageOutlined className="icon-post" /> 19</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-popular">
                                            <img className="blog-img" src={girlImg}></img>
                                            <div className="text">
                                                <h3 className="heading"><a>Even the all-powerful Pointing has no control</a></h3>
                                                <div className="meta">
                                                    <div><a href="#"><CalendarOutlined className="icon-post" /> June 28, 2019</a></div>
                                                    <div><a href="#"><UserOutlined className="icon-post" /> Dave Lewis</a></div>
                                                    <div><a href="#"><MessageOutlined className="icon-post" /> 19</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs='2'></Col>
                </Row>
            </div>
        </>
    );

}

export default Home;