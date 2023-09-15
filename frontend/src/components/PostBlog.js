import React, { useState } from "react";
import { Card, Col, Row, Upload, Form, Button } from "antd";
import "react-quill/dist/quill.snow.css";
import { navigate } from "gatsby";
import ReactQuill from "react-quill";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { postRoute } from "../utils/APIRoutes";
import axios from "axios";

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const PostBlog = () => {
  const [values, setValues] = useState({
    questionTitle: "",
    courseCode: "",
    universityName: "",
    category: "",
    courseName: "",
    insertPrice: "",
    insertTagsHere: "",
  });
  const [content, setContent] = useState("");

  const handleQuillChange = (value) => {
    setContent(value);
    console.log(value);
  };
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(values.username);
    const {
      questionTitle,
      courseCode,
      universityName,
      category,
      courseName,
      insertPrice,
      insertTagsHere,
    } = values;
    const description = content;
    const { data } = await axios.post(postRoute, {
      questionTitle,
      courseCode,
      universityName,
      category,
      courseName,
      insertPrice,
      insertTagsHere,
      description,
    });
    if (data.status === true) {
      console.log(data);
      navigate("/auth/login");
    }
    if (data.status === false) {
      setErrors(data.errors);
      console.log(data);
      console.log(errors);
    }
  };

  return (
    <Card
      style={{
        padding: "5px",
        marginTop: 0,
        height: "560px",
        marginBottom: "-6px",
      }}
    >
      <div
        style={{
          marginTop: "-30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "awesome",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          Assignment Help
        </h3>
      </div>
      <Row>
        <Col span={12} style={{ paddingRight: "10px" }}>
          <div style={{ paddingBottom: "9px" }}>
            <input
              type="text"
              placeholder="Question Title"
              name="questionTitle"
              onChange={(e) => handleChange(e)}
              style={{
                width: "100%",
                height: "40px",
                fontSize: "15px",
                color: "black !important",
                border: "1px solid #d9d9d9",
                padding: "8px",
                fontFamily: "awesome",
              }}
            />
          </div>
          <ReactQuill
            placeholder="Content"
            value={content}
            onChange={handleQuillChange}
            style={{ height: "280px" }}
          />
        </Col>
        {/* <Col span={12}> */}
        <Col span={6} style={{ paddingRight: "10px" }}>
          <div style={{ paddingBottom: "9px" }}>
            <input
              type="text"
              placeholder="Course Code"
              name="courseCode"
              onChange={(e) => handleChange(e)}
              style={{
                width: "100%",
                height: "35px",
                fontSize: "15px",
                color: "black !important",
                border: "1px solid #d9d9d9",
                padding: "8px",
                fontFamily: "awesome",
              }}
            />
          </div>

          <div style={{ paddingBottom: "9px" }}>
            <input
              type="text"
              placeholder="University name"
              name="universityName"
              onChange={(e) => handleChange(e)}
              style={{
                width: "100%",
                height: "35px",
                fontSize: "15px",
                color: "black !important",
                border: "1px solid #d9d9d9",
                padding: "8px",
                fontFamily: "awesome",
              }}
            />
          </div>

          <div style={{ paddingBottom: "9px" }}>
            <input
              type="text"
              placeholder="Category"
              name="category"
              onChange={(e) => handleChange(e)}
              style={{
                width: "100%",
                height: "35px",
                fontSize: "15px",
                color: "black !important",
                border: "1px solid #d9d9d9",
                padding: "8px",
                fontFamily: "awesome",
              }}
            />
          </div>
          <Form.Item
            name="upload"
            label="Upload"
            style={{ paddingTop: "20px" }}
            valuePropName="fileList"
            getValueFromEvent={normFile}
            // extra="longgggggggggggggggggggggggggggggggggg"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col span={6}>
          <div style={{ paddingBottom: "9px" }}>
            <input
              type="text"
              placeholder="Course Name"
              name="courseName"
              onChange={(e) => handleChange(e)}
              style={{
                width: "100%",
                height: "35px",
                fontSize: "15px",
                color: "black !important",
                border: "1px solid #d9d9d9",
                padding: "8px",
                fontFamily: "awesome",
              }}
            />
          </div>
          <div style={{ paddingBottom: "9px" }}>
            <input
              type="text"
              placeholder="Insert Price"
              name="insertPrice"
              onChange={(e) => handleChange(e)}
              style={{
                width: "100%",
                height: "35px",
                fontSize: "15px",
                color: "black !important",
                border: "1px solid #d9d9d9",
                padding: "8px",
                fontFamily: "awesome",
              }}
            />
          </div>
          <div style={{ paddingBottom: "9px" }}>
            <input
              type="text"
              placeholder="Insert Tags here"
              name="insertTagsHere"
              onChange={(e) => handleChange(e)}
              style={{
                width: "100%",
                height: "35px",
                fontSize: "15px",
                color: "black !important",
                border: "1px solid #d9d9d9",
                padding: "8px",
                fontFamily: "awesome",
              }}
            />
          </div>
          {/* </Col> */}
          <Form.Item label="Dragger">
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
        </Col>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "100vh",
            paddingLeft: "490px",
          }}
        >
          <Button
            type="primary"
            style={{
              width: "120px",
              height: "50px",
              fontSize: "20px",
              fontFamily: "awesome",
            }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </Row>
    </Card>
  );
};

export default PostBlog;
