import React, { useEffect, useState } from "react";
import { Card, Col, Pagination, Row } from "antd";
import axios from "axios";

const BlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(
        "http://95.216.104.112:5000/api/posts/fetch/answeredPosts"
      );
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);
  const onChange = (page) => setCurrent(page);
  return (
    <div>
      {blogs?.length
        ? blogs.slice((current - 1) * 5, current * 5).map((blog) => {
            return (
              <Card
                style={{ padding: "5px", marginTop: "5px" }}
                key={blog.questionTitle}
              >
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
                      <Col xs={{span: 24}} md={{span: 12}} xl={{span: 8}}>
                      <span>
                          <strong>University:</strong>
                        </span>
                        <span>{blog.universityName}</span>
                      </Col>
                      <Col xs={{span: 24}} md={{span: 12}} xl={{span: 8}}>
                      <span>
                          <strong>Category:</strong>
                        </span>
                        <span>{blog.category}</span>
                      </Col>
                      <Col xs={{span: 24}} md={{span: 12}} xl={{span: 8}}>
                      <span>
                          <strong>Date:</strong>
                        </span>
                        <span>{blog.date}</span>
                      </Col>
                      <Col xs={{span: 24}} md={{span: 12}} xl={{span: 8}}>
                      <span>
                          <strong>Course code:</strong>
                        </span>
                        <span>{blog.courseCode}</span>
                      </Col>
                      <Col xs={{span: 24}} md={{span: 12}} xl={{span: 8}}>
                      <span>
                          <strong>Course name:</strong>
                        </span>
                        <span>{blog.courseName}</span>
                      </Col>
                      <Col xs={{span: 24}} md={{span: 12}} xl={{span: 8}}>
                      <span>
                          <strong>Price:</strong>
                        </span>
                        <span>{blog.insertPrice}</span>
                      </Col>
                    </Row>
                    <h2
                      style={{
                        marginTop: "0px",
                        fontFamily: "awesome",
                        fontSize: "26px",
                        //textAlign: "center",
                      }}
                    >
                      <a href={`/answer/${blog._id}`}>{blog.questionTitle}</a>
                    </h2>
                  </div>
                  <div style={{ marginTop: "-15px" }}>
                    <div>
                      {blog.description?.length > 500 ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: blog.description
                              .replace(/(<([^>]+)>)/gi, "")
                              .replaceAll("&nbsp;", "")
                              .slice(0, 500)
                              .concat("..."),
                          }}
                          className="my-4"
                        ></div>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{ __html: blog.description }}
                          className="my-4"
                        />
                      )}
                      {blog.description?.length > 500 &&<p style={{color: 'blue', marginTop: "20px"}}> <a href={`/answer/${blog._id}`}>Read more{' >>'}</a></p>}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })
        : null}
      <Pagination
        style={{ margin: "5px auto", float: "right" }}
        current={current}
        onChange={onChange}
        total={blogs.length}
        pageSize={5}
      />
    </div>
  );
};

export default BlogContent;
