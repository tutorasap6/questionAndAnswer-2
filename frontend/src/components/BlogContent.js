import React, { useEffect, useState } from "react";
import { Card, Pagination } from "antd";
import axios from "axios";

const BlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get(
        "http://166.88.77.154:5000/api/posts/fetch/answeredPosts"
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
                style={{ height: "300px", padding: "5px", marginTop: "5px" }}
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
                        <span>{blog.universityName}</span>
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
                        <span>{blog.category}</span>
                      </li>

                      <li
                        style={{
                          paddingRight: "5px",
                          margin: "5px",
                        }}
                      >
                        <span>
                          <strong>Date:</strong>
                        </span>
                        <span>03 May 2023</span>
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
                        <span>{blog.courseCode}</span>
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
                        <span>{blog.courseName}</span>
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
                        <span>{blog.insertPrice}</span>
                      </li>
                    </ul>
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
                      {blog.description?.length > 500 && <span>...</span>}
                    </div>

                    {/* <div
                      style={{
                        marginTop: "80px",
                        paddingLeft: "700px",
                        position: "absolute",
                      }}
                    >
                      <a href="/answer">
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
                      </a>
                    </div> */}
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
