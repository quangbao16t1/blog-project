import { CalendarOutlined, MessageOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Col, Row } from "reactstrap";
import girlImg from '../Profile/girl.jpg';
import './PostDetail.css';
import '../HomPage/Home.css';
import CommentView from "features/Comment/Comment";

const PostDetail = () => {
  return (
    <>
      <div className="colorlib-main">
        <Row xs={3}>
          <Col xs='2' ></Col>
          <Col xs='8'>
            <Row xs={2}>
              <Col xs='8'>
                <div className="left-container">
                  <div className="about-author d-flex p-4 bg-light">
                    <div className="bio mr-5">
                      <img src={girlImg} alt="Image placeholder" className="img-fluid mb-4"></img>
                    </div>
                    <div className="desc">
                      <h3>George Washington</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                    </div>
                  </div>
                </div>
                <div>
                  <CommentView />
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
  )
}

export default PostDetail;