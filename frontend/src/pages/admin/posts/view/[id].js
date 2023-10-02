import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col, Row, Button } from "antd";
import { Layout, Dropdown } from "antd";
import { Link } from "gatsby";
import { Menu } from "antd";
import logocom from "../../../../assets/images/Logocom.png";
import { navigate } from "gatsby";
import { CaretDownOutlined, SmileOutlined } from '@ant-design/icons';
import FileViewer from "react-file-viewer";

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function CrudDetails(params) {
  const [crud, setCrud] = useState({});
  const [file, setFile] = useState(null);
  const { id } = params;
  const { Header, Content } = Layout;

  useEffect(
    function () {
      async function getCrudById() {
        try {
          const response = await axios.get(
            `${process.env.api_url}/api/posts/${id}`
          );
          setCrud(response.data);
        } catch (error) {
          console.log("error", error);
          navigate('/404')
        }
      }
      getCrudById();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleFile = (e) => setFile(e.target.files[0]);
  function handleCancel() {
    navigate("/admin/admin");
  }

  const handlePush = async (e) => {
    try {
      e.preventDefault();
      const data = new FormData();
      data.append("file", file);
      const res = await axios({
        method: "post",
        url: `${process.env.api_url}/api/posts/upload/${id}`,
        data: data,
      });
      navigate("/solution");
    } catch (e) {
      throw e;
    }
  };

  const array = [
    {name: "Admin", url: "/admin/admin"},
    { name: "Home", url: "/" },
    { name: "Solutions", url: "/solution" },
    { name: "Post Questions", url: "/post" },
    { name: "About Us", url: "/about" },
    { name: "How it works", url: "/how" },
    { name: "Services", url: "/service" },
    { name: "Pricing", url: "/pricing" },
    { name: "Terms and Conditions", url: "/terms" },
    { name: "Logout", url: "/logout" }
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
      <Content style={{ paddingTop: "70px" }}>
        <Row
        // style={{ marginTop: "40px" }}
        >
          <Col
            span={4}
          // style={{ borderRight: "0.1px solid rgba(111,111,110,.8)" }}
          ></Col>
          <Col span={16}>
            <Card style={{ height: "100%", padding: "5px", marginTop: "5px" }}>
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
                  <div
                    dangerouslySetInnerHTML={{
                      __html: crud.description
                    }}
                  ></div>
                </div>
              </div>
              {crud.file && (
                <div>
                  <FileViewer
                    filePath={`${process.env.api_url}/${crud.file}`}
                    fileType={
                      crud.file.split(".")[crud.file.split(".").length - 1]
                    }
                  />
                </div>
              )}
            </Card>
            <div>
              <Row style={{ paddingTop: "35px" }}>
                <Col md={{ span: 3, offset: 3 }} lg={{ offset: 5, span: 3 }} xxl={{ span: 3, offset: 6 }}>
                  <input type="file" onChange={handleFile} />
                </Col>
                <Col md={{ span: 6 }} xl={{ span: 2, offset: 16 }} />
                <Col
                  md={{ span: 4 }} lg={{ span: 3 }} xl={{ span: 2 }}
                >
                  {" "}
                  <Button
                    type="primary"
                    disabled={!file}
                    onClick={handlePush}
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: "20px",
                      fontFamily: "awesome",
                      padding: "3px",
                    }}
                  >
                    Push
                  </Button>
                </Col>
                <Col md={{ span: 2 }} xl={{ span: 1 }} />
                <Col md={{ span: 4 }} lg={{ span: 3 }} xl={{ span: 2 }}>
                  <Button
                    type="primary"
                    onClick={handleCancel}
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: "20px",
                      fontFamily: "awesome",
                      padding: "3px",
                    }}
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </>
  );
}

export default CrudDetails;
