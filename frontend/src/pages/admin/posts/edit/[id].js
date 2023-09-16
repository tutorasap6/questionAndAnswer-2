import React, { useState, useEffect } from "react";
import { get, patch } from "axios";
import { navigate } from "gatsby";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "antd";
import { Link } from "gatsby";
import { Menu } from "antd";
import { Col, Row } from "antd";
import logocom from "../../../../assets/images/Logocom.png";

const { Header } = Layout;
function PostEdit(params) {
  const { id } = params;
  const [post, setPost] = useState({});
  const [temp, setTemp] = useState({});

  useEffect(
    function () {
      async function updatePost() {
        try {
          const response = await get(`http://localhost:5000/api/posts/${id}`);
          setTemp(response.data);
          setPost(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      updatePost();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  function handleSubmit(event) {
    event.preventDefault();
    async function updatePost() {
      try {
        await patch(`http://localhost:5000/api/posts/${id}`, post);
        toast.success("Updated Successfully", {
          position: "top-right",
          autoClose: 1000,
          theme: "colored",
          hideProgressBar: true,
        });
        setTimeout(() => {
          navigate("/admin/admin");
        }, 1500);
      } catch (error) {
        console.log(error);
      }
    }
    updatePost();
  }

  function handleChange(e) {
    setPost((post) => {
      return { ...post, [e.target.name]: e.target.value };
    });
  }

  function handleCancel() {
    navigate("/admin/admin");
  }
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
        <ToastContainer />
        <h1>Edit </h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Course Code</label>
            <input
              name="courseCode"
              type="text"
              value={post.courseCode}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>CourseName</label>
            <input
              name="courseName"
              value={post.courseName}
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>University</label>
            <input
              name="universityName"
              value={post.universityName}
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              name="category"
              value={post.category}
              type="text"
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              name="insertPrice"
              type="number"
              value={post.insertPrice}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Tag</label>
            <input
              name="insertTagsHere"
              value={post.insertTagsHere}
              type="url"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              name="description"
              value={post.description}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="btn-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostEdit;
