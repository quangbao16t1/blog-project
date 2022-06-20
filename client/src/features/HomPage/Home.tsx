import { useEffect, useState } from "react";
import './Home.css'
import { Button, Form, Input, List } from "antd";
import { Col, Row } from "reactstrap";
import girlImg from '../Profile/girl.jpg';
import { CalendarOutlined, MessageOutlined, RightOutlined, SearchOutlined, UserOutlined, WechatOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "app/hook";
import { getPost, getPostId, postSelector } from "features/Post/postSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const natigave = useNavigate();
    const dispatch = useAppDispatch();
    const { postList } = useAppSelector(postSelector);

    useEffect(() => {
        dispatch(getPost());
    }, [])

    const getPostDetail =  (id: any) => {
        dispatch(getPostId(id)).then(() => {
            natigave(`/post-detail/${id}`)
        })
    }
    // const PostView = ({ post }: { post: Post}) => {
    //     return (
    //         <div className="bg-light border">
    //             <div className="blog-entry">
    //                 <img className="post-img" src={girlImg}></img>
    //                 <div className="text">
    //                     <h3 className="post-title"><a href="#">{post?.title}</a></h3>
    //                     <div className="meta-wrap">
    //                         <p className="meta">
    //                             <span><CalendarOutlined className="icon-post" />{}</span>
    //                             <span><MessageOutlined className="icon-post" />5 Comment</span>
    //                         </p>
    //                     </div>
    //                     <p className="post-content">{post?.content}</p>
    //                     <p><a href="#" className="btn-custom">Read More <span className="ion-ios-arrow-forward"></span></a></p>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

    // const PostList = ({ posts }: { posts: Post[] }) => (
    //     <List
    //         dataSource={posts}
    //         header={`${posts.length} ${posts.length > 1 ? 'list' : 'list'}`}
    //         itemLayout="horizontal"
    //         renderItem={props => <PostView {...props} />}
    //     />
    // );

    return (
        <>
            <div className="colorlib-main" style={{height: '100vh'}}>
                <Row xs={3}>
                    <Col xs='2' ></Col>
                    <Col xs='8'>
                        <Row xs={2}>
                            <Col xs='8'>
                                <div className="left-container">
                                    { postList && postList.map((p) => (
                                        <div key={p.id} className="bg-light border">
                                            <div className="blog-entry">
                                                <img className="post-img" src={girlImg}></img>
                                                <div className="text">
                                                    <h3 className="post-title"><a href="#">{p?.title}</a></h3>
                                                    <div className="meta-wrap">
                                                        <p className="meta">
                                                            <span><CalendarOutlined className="icon-post" /><>{new Date(p.createAt).toISOString().slice(0, 10)}</></span>
                                                            <span><MessageOutlined className="icon-post" />{p.countCmt} Comment</span>
                                                        </p>
                                                    </div>
                                                    <p className="post-content">{p.content}</p>
                                                    <p><a className="btn-custom" onClick={() => getPostDetail(p.id)}>Read More <RightOutlined /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
                                        {postList && postList.map((p) => (
                                            p?.countCmt > 0 ? (
                                                <div key={p.id} className="box-popular">
                                                    <img className="blog-img" src={girlImg}></img>
                                                    <div className="text">
                                                        <h3 className="heading"><a>{p.title}</a></h3>
                                                        <div className="meta">
                                                            <div><a href="#"><CalendarOutlined className="icon-post" /> {new Date(p.createAt).toISOString().slice(0, 10)}</a></div>
                                                            <div><a href="#"><UserOutlined className="icon-post" /> <>{p?.user?.firstName} {p?.user?.lastName}</> </a></div>
                                                            <div><a href="#"><MessageOutlined className="icon-post" /> {p.countCmt}</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : <></>
                                        ))}
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