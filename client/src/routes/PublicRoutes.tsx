import { AuthUserRoute } from "./AuthUserRoute"
import { UserRoutes } from "./UserRoutes";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FilterOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import Login from "features/Auth/Login";
import Home from "features/HomPage/Home";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
const { Content } = Layout;


const PublicRoutes = () => {

  const arrayPath = useLocation().pathname.replace("/", "").split("/")
  const pathList:any = {
    introduction: "giới thiệu",
    contact: "liên hệ",
    login: "đăng nhập",
  }

  const pathName = arrayPath.map(item => {
    return pathList[item]
  })

  return (
    <Layout>
      <Header></Header>
      {useLocation().pathname === "/" && <div className="carousel-slide" style={{ marginTop: "39px" }}>
      </div>}

      <Content
        className="site-layout container"
        style={{
          marginTop: 50,
          marginBottom: 100
        }}
      >
        <Breadcrumb
          style={{
            marginTop: 20,
            marginBottom: 12,
          }}>
          {useLocation().pathname !== "/" &&
            <Breadcrumb.Item href="/home">
              <span style={{ display: "inline" }}>Trang Chủ</span>
            </Breadcrumb.Item>
          }
          {pathName.map((item, index) => {
            return (
              <Breadcrumb.Item key={index} >{item}</Breadcrumb.Item>
            )
          })}
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{
            paddingTop: 30,
            minHeight: 380,
          }}
        >
          <Routes>
            <Route
              path="/"
              element={<Home/>}
            ></Route>
            <Route path="/introduction" element={<> </>}></Route>
            <Route
              path="/login"
              element={<Login />}
            ></Route>
           
            <Route
              path="/user/*"
              element={
                <AuthUserRoute>
                  <UserRoutes />
                </AuthUserRoute>
              }
            />
            <Route
              path="/not-found"
              element={<div>NOTFOUNDAPI</div>}
            ></Route>
            <Route
              path="*"
              element={<div>NOTFOUNDROUTE</div>}
            ></Route>
          </Routes>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export { PublicRoutes };
