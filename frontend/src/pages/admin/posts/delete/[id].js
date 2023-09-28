import React from "react";
import { Layout } from "antd";
import { Link } from "gatsby";
import { Menu } from "antd";
import { Col, Row, Dropdown } from "antd";
import { CaretDownOutlined, SmileOutlined } from '@ant-design/icons';
import logocom from "../../../../assets/images/Logocom.png";
import PostDelete from "../../../../components/PostDelete";

const { Header, Content } = Layout;

const DeletePage = (params) => {
  const { id } = params;
  console.log(id);
  const array = [
    {name: "Admin", url: "/admin/admin"},
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/" },
    { name: "Post Questions", url: "/post" },
    { name: "About Us", url: "/about" },
    { name: "How it works", url: "/how" },
    { name: "Services", url: "/service" },
    { name: "Pricing", url: "/pricing" },
    { name: "Terms and Conditions", url: "/terms" },
  ];
  return (
    <>
      <Header
        style={{
          padding: "0",
          height: "96px",
          background: "#272930",
          margin: "-8px",
        }}
      >
        <Row>
          <Col

            lg={{ span: 3 }}
            style={{
              display: "flex",
              paddingTop: "10px",
            }}
          >
            <a href="/" style={{ margin: '0 auto' }}>
              <img src={logocom} alt="logo" height="40%" />
            </a>
          </Col>
          <Col md={{ span: 0 }} xl={{ span: 21 }} style={{ paddingTop: "30px" }}>
              <Menu
                theme="white"
                mode="horizontal"
                style={{ minWidth: 0, flex: "auto", justifyContent: "flex-end" }}
                md={{ gap: '3px' }}
                items={array.map((item, index) => {
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
          </Col>
          <Col md={{ span: 3, offset: 10 }} lg={{offset: 17}} xl={{ span: 0 }} style={{ paddingTop: "30px" }}>
              <Dropdown
                trigger={['click']}
                menu={{items: array.map((item, index) => ({
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
            
          </Col>
          <Col span={2}></Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: "120px",
        }}
      >
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <PostDelete id={id}></PostDelete>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>delete</title>;

// Step 3: Export your component
export default DeletePage;
