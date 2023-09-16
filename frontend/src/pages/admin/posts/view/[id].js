import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Upload, Form, Button } from "antd";
import { Layout } from "antd";
import { Link } from "gatsby";
import { Menu } from "antd";
import logocom from "../../../../assets/images/Logocom.png";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function CrudDetails(params) {
  const [crud, setCrud] = useState({});
  const { id } = params;
  const { Header, Content } = Layout;
  useEffect(
    function () {
      async function getCrudById() {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/posts/${id}`
          );
          setCrud(response.data);
        } catch (error) {
          console.log("error", error);
        }
      }
      getCrudById();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const array = [
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
            span={6}
            style={{
              paddingLeft: "300px",
              paddingTop: "15px",
            }}
          >
            <img src={logocom} alt="logo" width="60%" height="65%" />
          </Col>
          <Col
            span={6}
            style={{
              padding: "30px",
              paddingLeft: "20px",
              paddingRight: "60px",
            }}
          ></Col>
          <Col span={12} style={{ paddingTop: "16px" }}>
            <Menu
              theme="white"
              mode="horizontal"
              items={array.map((item, index) => {
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
          </Col>
        </Row>
      </Header>
      <Content style={{ paddingTop: "70px" }}>
        <Row
        // style={{ marginTop: "40px" }}
        >
          <Col
            span={4}
            // style={{ borderRight: "0.1px solid rgba(111,111,110,.8)" }}
          ></Col>
          <Col span={16}>
            <Card style={{ height: "700px", padding: "5px", marginTop: "5px" }}>
              <div
                style={{
                  padding: "5px",
                  paddingTop: "0px",
                  fontFamily: "'Heebo', sans-serif",
                  marginBottom: "15px",
                }}
              >
                <div style={{ marginBottom: "15px", marginTop: "-10px" }}>
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      borderTop: "0.2px solid rgba(0,0,0,0.2)",
                      borderBottom: "0.2px solid rgba(0,0,0,0.2)",
                      marginTop: "0.2px",
                      marginBottom: "0px",
                      paddingTop: "3px",
                      height: "35px",
                      paddingLeft: "10px",
                    }}
                  >
                    <li
                      style={{
                        marginRight: "10px",
                        borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                        paddingRight: "5px",
                        margin: "5px",
                      }}
                    >
                      <span>
                        <strong>University:</strong>
                      </span>
                      <span>{crud.universityName}</span>
                    </li>
                    <li
                      style={{
                        borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                        paddingRight: "5px",
                        margin: "5px",
                      }}
                    >
                      <span>
                        <strong>Category:</strong>
                      </span>
                      <span>{crud.category}</span>
                    </li>

                    <li
                      style={{
                        paddingRight: "5px",
                        margin: "5px",
                      }}
                    >
                      <span>
                        <strong>Tag</strong>
                      </span>
                      <span>{crud.insertTagsHere}</span>
                    </li>
                  </ul>
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      borderBottom: "0.2px solid rgba(0,0,0,0.2)",
                      marginTop: "0.2px",
                      paddingTop: "3px",
                      height: "35px",
                      paddingLeft: "10px",
                    }}
                  >
                    <li
                      style={{
                        marginRight: "10px",
                        borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                        paddingRight: "5px",
                        margin: "5px",
                      }}
                    >
                      <span>
                        <strong>Course code:</strong>
                      </span>
                      <span>{crud.courseCode}</span>
                    </li>
                    <li
                      style={{
                        borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                        paddingRight: "5px",
                        margin: "5px",
                      }}
                    >
                      <span>
                        <strong>Course name:</strong>
                      </span>
                      <span>{crud.courseName}</span>
                    </li>
                    <li
                      style={{
                        paddingRight: "5px",
                        margin: "5px",
                      }}
                    >
                      <span>
                        <strong>Price:</strong>
                      </span>
                      <span> {crud.insertPrice}</span>
                    </li>
                  </ul>
                  <h2
                    style={{
                      marginTop: "-15px",
                      fontFamily: "awesome",
                      fontSize: "26px",
                      // textAlign: "center",
                    }}
                  >
                    {crud.questionTitle}
                  </h2>
                </div>
                <div style={{ marginTop: "-15px" }}>
                  <div>{crud.description}</div>
                  <div style={{ marginTop: "420px" }}>
                    <Row>
                      <Col span={18}></Col>
                      <Col span={3}>
                        <Form.Item
                          name="upload"
                          label="Upload"
                          valuePropName="fileList"
                          getValueFromEvent={normFile}
                          // extra="longgggggggggggggggggggggggggggggggggg"
                        >
                          <Upload
                            name="logo"
                            action="/upload.do"
                            listType="picture"
                          >
                            <Button icon={<UploadOutlined />}>
                              Click to upload
                            </Button>
                          </Upload>
                        </Form.Item>
                      </Col>
                      <Col
                        span={3}
                        style={{ paddingLeft: "60px", paddingTop: "25px" }}
                      >
                        {" "}
                        <a href="/answer">
                          <button
                            type="submit"
                            style={{
                              width: "60px",
                              height: "40px",
                              fontSize: "20px",
                              fontFamily: "awesome",
                            }}
                          >
                            push
                          </button>
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </>
  );
}

export default CrudDetails;
