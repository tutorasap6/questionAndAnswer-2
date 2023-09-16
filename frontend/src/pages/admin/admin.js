import React from "react";
import { Layout } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "gatsby";
import { Menu } from "antd";
import { Col, Row } from "antd";
import logocom from "../../assets/images/Logocom.png";
import { getPostsRoute } from "../../utils/APIRoutes";

const { Header } = Layout;

const AdminPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    async function getPosts() {
      try {
        const response = await axios.get(getPostsRoute);
        console.log(response.data);
        setPosts(response.data);
        console.log("state: ");
      } catch (error) {
        console.log("error", error);
      }
    }
    getPosts();
  }, []);

  useEffect(() => {
    console.log("s", posts);
  }, [posts]);

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
      <div className="container">
        <div>
          <h2 style={{ textAlign: "center" }}>Question Management</h2>
          <hr />
        </div>

        <div className="table-responsive">
          <table className="table riped  table-hover table-bordered container">
            <thead>
              <tr>
                <th>Title</th>
                <th>description</th>
                <th>CourseCode</th>
                <th>CourseName</th>
                <th>UniversityName</th>
                <th>Category</th>
                <th>Tags</th>
                <th>Price</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr key={post._id}>
                    <td>
                      <Link to={`/posts/${post._id}`} className="link-line">
                        {post.questionTitle}
                      </Link>
                    </td>

                    <td>{post.description}</td>
                    <td>{post.courseCode}</td>
                    <td>{post.courseName}</td>
                    <td>{post.universityName}</td>
                    <td>{post.category}</td>
                    <td>{post.insertPrice}</td>
                    <td>{post.insertTagsHere}</td>
                    <td>
                      <Link
                        to={`/admin/posts/view/${post._id}`}
                        className="btn btn-warning"
                      >
                        View
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/admin/posts/edit/${post._id}`}
                        className="btn btn-success"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/admin/posts/delete/${post._id}`}
                        className="btn btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>admin</title>;

// Step 3: Export your component
export default AdminPage;
