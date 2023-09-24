import React from "react";
import { Card, Button, Row, Col } from "antd";
import screenimg from "../assets/images/answer.png";
import Checkout from "./Checkout";
import { navigate } from "gatsby";

const AnswerBlog = ({ post }) => {

  return (<div style={{ marginBottom: "50px" }}>
    <Card style={{ padding: "5px" }}>
      <div
        style={{
          padding: "5px",
          paddingTop: "0px",
          fontFamily: "'Heebo', sans-serif",
          marginBottom: "15px",
        }}
      >
        <div style={{ marginBottom: "15px", marginTop: "-10px" }}>
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }}>
              <span>
                <strong>University:</strong>
              </span>
              <span>{post.universityName}</span>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }}>
              <span>
                <strong>Category:</strong>
              </span>
              <span>{post.category}</span>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }}>
              <span>
                <strong>Date:</strong>
              </span>
              <span>{(new Date(post.date)).getFullYear() + '-' + ((new Date(post.date)).getMonth() + 1) + '-' + (new Date(post.date)).getDate()}</span>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }}>
              <span>
                <strong>Course code:</strong>
              </span>
              <span>{post.courseCode}</span>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }}>
              <span>
                <strong>Course name:</strong>
              </span>
              <span>{post.courseName}</span>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }}>
              <span>
                <strong>Price:</strong>
              </span>
              <span>{post.insertPrice}</span>
            </Col>
          </Row>
          <h2
            style={{
              marginTop: "15px",
              fontFamily: "awesome",
              fontSize: "26px",
              // textAlign: "center",
            }}
          >
            {post.questionTitle}
          </h2>
        </div>
        <div style={{ marginTop: "15px" }}>
          <div
            dangerouslySetInnerHTML={{
              __html: post.description,
            }}
          ></div>
          {/* <div style={{ marginTop: "-15px", paddingLeft: "680px" }}>
            <button
              type="submit"
              style={{
                width: "100%",
                height: "30px",
                fontSize: "20px",
                fontFamily: "awesome",
              }}
            >
              Answer
            </button>
          </div> */}
        </div>
      </div>
    </Card>
    <Card style={{ padding: "5px", marginTop: 16 }}>
      <div
        style={{
          padding: "5px",
          paddingTop: "10px",
          fontFamily: "'Heebo', sans-serif",
          marginBottom: "15px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <h2
            style={{
              marginTop: "-20px",
              fontFamily: "awesome",
              fontSize: "26px",
              textAlign: "center",
            }}
          >
            Answer Details
          </h2>
        </div>
        <div style={{ marginTop: "-20px" }}>
          <div style={{ borderTop: "1px solid #dedede" }}>
            <img
              src={screenimg}
              alt="screenimage"
              width="100%"
              height="160px"
            />
          </div>
          <div>
            {/* <a href="/homework-solution-details/632507/accn-2010-quiz-1-tulane-university">
              Read more <i></i>
            </a> */}
            <Checkout post={post} />
            <div style={{ marginTop: "5px" }}>
              <Button block style={{ fontWeight: "bold" }} onClick={() => navigate('/quote')}>
                Get a quote of a new original/Human generated paper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>)
}

export default AnswerBlog;
