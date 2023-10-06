import React, { useEffect, useState } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { Col, Row, Input } from "antd";
import logocom from "../assets/images/logocom.png";
import { Link } from "gatsby";
import backimg from "../assets/images/action.png";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { CaretDownOutlined } from '@ant-design/icons';
import "react-toastify/dist/ReactToastify.css";

// const { Search } = Input;
const { Header, Footer } = Layout;

const MainLayout = ({ pageTitle, children }) => {
  const onSearch = (value) => console.log(value);
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!localStorage.token) setAuthorized(false);
    else {
      const token = localStorage.token;
      const fetchUser = async () => {
        try {

          const res = await axios.get(`${process.env.api_url}/api/auth`, {
            headers: { "x-auth-token": token },
          });
          setUser(res.data);
          setAuthorized(true);
        } catch (e) {
          console.log(e);
          localStorage.removeItem('token');
        }
      };
      fetchUser();
    }
  }, []);

  // const navbarArray = ["Home", "AboutUs", "How To Work"]
  const unauthorizedArray = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solution" },
    { name: "About Us", url: "/about" },
    { name: "How it works", url: "/how" },
    { name: "Services", url: "/service" },
    { name: "Pricing", url: "/pricing" },
    { name: "Terms and Conditions", url: "/terms" },
    { name: "Post Project", url: "/auth/login" },
  ];

  const authorizedArray = [
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solution" },
    { name: "Post Questions", url: "/post" },
    { name: "About Us", url: "/about" },
    { name: "How it works", url: "/how" },
    { name: "Services", url: "/service" },
    { name: "Pricing", url: "/pricing" },
    { name: "Terms and Conditions", url: "/terms" },
    { name: "Logout", url: "/logout" },
  ];
  if (user?.role === "admin")
    authorizedArray.unshift({ name: "Admin", url: "/admin/admin" });

  return (
    <Layout className="layout" style={{ margin: "-8px" }}>
      <ToastContainer />
      <header
        style={{
          padding: "0",
          height: "90px",
          background: "#272930",
        }}
      >
        <Row>
          <Col

            lg={{ span: 2 , offset:3 }}
            style={{
              display: "flex",
              paddingTop: "10px",
             
            }}
          >
            <a href="/" style={{ margin: '0 auto' }}>
              <img src={logocom} alt="logo" height="40%"  />
            </a>
          </Col>
          <Col md={{ span: 0 }} xl={{ span: 19 }} style={{ paddingTop: "30px", paddingRight:"30px" }}>
            {authorized ? (
              <Menu
                theme="white"
                mode="horizontal"
                style={{ minWidth: 0, flex: "auto", justifyContent: "flex-end" }}
                md={{ gap: '3px' }}
                items={authorizedArray.map((item, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: (
                      <Link to={item.url}>
                        <span
                          style={{
                            fontFamily: "awesome",
                            color: "white",
                            fontSize: "16px",
                          }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ),
                  };
                })}
              />
            ) : (
              <Menu
                theme="white"
                mode="horizontal"
                style={{ minWidth: 0, flex: "auto", justifyContent: "space-evenly" }}
                items={unauthorizedArray.map((item, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: (
                      <Link to={item.url}>
                        <span
                          style={{
                            marginLeft: "5px",
                            fontFamily: "awesome",
                            color: "white",
                            fontSize: "16px",
                          }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ),
                  };
                })}
              />
            )}
          </Col>
          <Col md={{ span: 3, offset: 10 }} lg={{offset: 17}} xl={{ span: 0 }}style={{ paddingTop: "30px" }}>
            {authorized ? (
              <Dropdown
                trigger={['click']}
                menu={{items: authorizedArray.map((item, index) => ({
                  key: index + 1, label: <Link to={item.url}>
                    <span
                      style={{
                        fontFamily: "awesome",
                        color: "black",
                        fontSize: "16px",
                      }}
                    >
                      {item.name}
                    </span>
                  </Link>
                }))}}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <CaretDownOutlined />
                </a>
              </Dropdown>
            ) : (
              <Dropdown
                trigger={['click']}
                menu={{items: unauthorizedArray.map((item, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: (
                      <Link to={item.url}>
                        <span
                          style={{
                            marginLeft: "5px",
                            fontFamily: "awesome",
                            color: "black",
                            fontSize: "16px",
                          }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ),
                  };
                })}}
              ><a onClick={(e) => e.preventDefault()}>
                  <CaretDownOutlined />
                </a></Dropdown>
            )}
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
      <div
        style={{
          backgroundImage: `url( ${backimg})`,
          backgroundSize: "cover",
          height: "180px",
        }}
      >
        <Row>
          <Col span={4}></Col>
          <Col span={8} style={{ paddingTop: "40px" }}>
            {/* <div>
              <h4 style={{ fontFamily: "awesome", color: "white" }}>
                Why Champlain Solutions?
              </h4>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "awesome",
                  color: "white",
                }}
              >
                We at ChamplainSolutions.com are aware of the difficulties that
                students have when pursuing an education online. Our goal is to
                give students like you thorough support so you can succeed in
                your online courses with assurance.
              </p>
            </div> */}
          </Col>
          <Col span={8}></Col>
          <Col span={4}></Col>
        </Row>
      </div>
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>{children}</div>
      {/* <Footer
        style={{
          // textAlign: "center",
          padding: "0px",
        }}
      >
        <Row
          style={{
            // background: "rgb(66,180,186)",
            background: "rgb(26,28,33)",
            display: "flex",
            justifyContent: "center",
            height: "315px",
            paddingTop: "40px",
          }}
        >
          <Col
            span={5}
            style={{
              paddingTop: "100px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img src={logocom} alt="logo" height="40%" />
          </Col>
          <Col xs={{span: 0}} xl={{span: 5}} style={{ paddingLeft: "0px", paddingTop: "65px" }}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "awesome",
                color: "#707885",
              }}
            >
              Online education has become an essential component of our academic
              path in the fast-paced world of today. However, it frequently
              presents its own special difficulties. Students frequently have
              overwhelming workloads due to managing many online courses and
              keeping up with assignments, exams, lab reports, and essays. This
              is where ChamplainSolutions.com comes in to help you have a more
              effective and seamless experience when learning online.
            </p>
          </Col>
          <Col xs={{span: 6}} xl={{span: 3}} style={{ paddingLeft: "40px" }}>
            <h4
              style={{
                fontFamily: "awesome",
                color: "white",
                fontSize: "18px",
                // paddingLeft: "40px",
              }}
            >
              About us
            </h4>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a
                  href="/"
                  style={{
                    fontFamily: "awesome",
                    color: "#707885",
                  }}
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  style={{ fontFamily: "awesome", color: "#707885" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  style={{ fontFamily: "awesome", color: "#707885" }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  style={{ fontFamily: "awesome", color: "#707885" }}
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={{span: 6}} xl={{span: 3}} style={{ paddingLeft: "40px" }}>
            <h4
              style={{
                fontFamily: "awesome",
                color: "white",
                fontSize: "18px",
                // paddingLeft: "30px",
              }}
            >
              Legal Stuff
            </h4>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Team of Use
                </a>
              </li>
              <li>
                <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  style={{ fontFamily: "awesome", color: "#707885" }}
                >
                  Pricing
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={{span: 6}} xl={{span: 3}} style={{ paddingLeft: "40px" }}>
            <h4
              style={{
                fontFamily: "awesome",
                color: "white",
                fontSize: "18px",
                // paddingLeft: "50px",
              }}
            >
              Help
            </h4>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
                  knowledge Base
                </a>
              </li>
              <li>
                <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Support
                </a>
              </li>
              <li>
                <a href="#" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Advanced Payment
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <div
          style={{
            background: "rgb(26,28,33)",
            display: "flex",
            justifyContent: "center",
            height: "100px",
            borderTop: "1px solid #212328",
            marginTop: "0.2px",
          }}
        >
          <h2
            style={{
              fontFamily: "awesome",
              color: "#707885",
              fontSize: "18px",
              margin: "30px",
              marginLeft: "0px",
              textAlign: "center",
            }}
          >
            ©2023 Champlain Solutions
          </h2>
        </div>
      </Footer> */}
       <Footer
        style={{
          textAlign: "center",
          margin: "-8px",
          width:"100vw",
          background: "rgb(26,28,33)",
          padding: "1px"
        }}
      >     
      
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              height: "300px",
              paddingTop: "3px",
            }}
          >
            
            <Col xs={{span: 24}} md = {{ span: 6}} xl={{span: 6}}  >
              <h4
                style={{
                  fontFamily: "awesome",
                  color: "white",
                  fontSize: "20px",
                  // paddingLeft: "30px",
                }}
              >
                About us
              </h4>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a
                    href="/"
                    style={{
                      fontFamily: "awesome",
                      color: "#707885",
                    }}
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    style={{ fontFamily: "awesome", color: "#707885",fontSize:"14px" }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/service"
                    style={{ fontFamily: "awesome", color: "#707885" ,fontSize:"14px" }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    style={{ fontFamily: "awesome", color: "#707885" ,fontSize:"14px" }}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={{span: 24}} md = {{ span: 6}} xl={{span: 6}} >
              <h4
                style={{
                  fontFamily: "awesome",
                  color: "white",
                  fontSize: "20px",
                  // paddingLeft: "30px",
                }}
              >
                Legal Stuff
              </h4>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a href="#" 
                     style={{ fontFamily: "awesome", color: "#707885" ,fontSize:"14px"}}>
                    Team of Use
                  </a>
                </li>
                <li>
                  <a href="#" 
                     style={{ fontFamily: "awesome", color: "#707885" ,fontSize:"14px"}}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    style={{ fontFamily: "awesome", color: "#707885" ,fontSize:"14px"}}
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={{span: 24}} md = {{ span: 6}} xl={{span: 6}} >
              <h4
                style={{
                  fontFamily: "awesome",
                  color: "white",
                  fontSize: "20px",
                  // paddingLeft: "50px",
                }}
              >
                Help
              </h4>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <a href="#" 
                     style={{ fontFamily: "awesome", color: "#707885", fontSize:"14px"}}>
                    knowledge Base
                  </a>
                </li>
                <li>
                  <a href="#" 
                     style={{ fontFamily: "awesome", color: "#707885" ,fontSize:"14px"}}>
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" 
                     style={{ fontFamily: "awesome", color: "#707885" ,fontSize:"14px"}}>
                    Advanced Payment
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        
        <div
          style={{
            background: "rgb(26,28,33)",
            display: "flex",
            justifyContent: "center",
            height: "100px",
            borderTop: "1px solid #212328",
            marginTop: "0.2px",
          }}
        >
          <h2
            style={{
              fontFamily: "awesome",
              color: "#707885",
              fontSize: "18px",
              margin: "30px",
              marginLeft: "0px",
              textAlign: "center",
            }}
          >
            ©2023 Champlain Solutions
          </h2>
        </div>
      </Footer>
    </Layout>
  );
};
export default MainLayout;
