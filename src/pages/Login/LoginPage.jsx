import { Layout, Button, Row, Col, Typography, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import SignBG from "../../assets/WADOL.jpg";
import Google from "../../assets/Google.jpeg";
import Instagram from "../../assets/Instagram.jpeg";
// import Tweeter from "../../assets/Tweeter.jpeg"; // Make sure this path is correct

import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log(username, password);
    navigate("/dashboard", { replace: true });
  };

  return (
    <Layout className="layout-default layout-signin">
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="header-col header-brand">
          <h5>Watching Dolphins</h5>
        </div>
        <div className="header-col">
          <Button type="primary" onClick={() => navigate("/signup")} style={{ alignSelf: 'flex-end' }}>
            Sign Up
          </Button>
        </div>
      </Header>
      <Content className="signin login-container">
        <Row gutter={[10, 0]} justify="center">
          <Col xs={{ span: 24 }} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={SignBG} alt="" className="sign-img" style={{ width: "300px", height: "auto" }} />
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 8 }} md={{ span: 12 }}>
            <Title className="font-regular text-muted" level={5} style={{ textAlign: 'center' }}>
              Welcome to Watching Dolphins
            </Title>
            <Form
              onFinish={() => handleLogin()}
              layout="vertical"
              className="row-col"
            >
              <Form.Item
                className="username"
                initialValue={username}
                label="Email"
                name="email"
                onChange={(e) => setUsername(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input placeholder="Email" prefix={<MailOutlined />} />
              </Form.Item>

              <Form.Item
                className="password"
                initialValue={password}
                label="Password"
                name="password"
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" prefix={<LockOutlined />} />
              </Form.Item>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "-10px" }}>
                <Button type="link" style={{ paddingLeft: 0 }}>
                  Forgot Password?
                </Button>
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  disabled={username === "" || password === ""}
                >
                  SIGN IN
                </Button>
              </Form.Item>

              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <Typography.Text type="secondary">
                  Sign in Using
                </Typography.Text>
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
                <img src={Google} alt="Google Sign In" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <img src={Instagram} alt="Instagram Sign In" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                {/* <img src={Tweeter} alt="Twitter Sign In" style={{ width: "40px", height: "40px", borderRadius: "50%" }} /> */}
              </div>
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer>
        <p className="copyright">
          {" "}
          Copyright © 2024 Joy Team - Powered by Universitas Pendidikan
          Ganesha
        </p>
      </Footer>
    </Layout>
  );
};

export default LoginPage;
