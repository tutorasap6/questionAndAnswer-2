import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "gatsby";

function PostDelete(props) {
  const [post, setPost] = useState({});

  useEffect(
    function () {
      async function deletePostById() {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/posts/${props.id}`
          );
          console.log(response);
          setPost(response.data);
        } catch (error) {
          console.log("error", error);
        }
      }
      deletePostById();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]
  );

  async function handleDelete() {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${props.id}`);
      navigate("/admin/admin");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <h2>{post.questionTitle}</h2>

      <p>
        <b>CourseCode</b> {post.courseCode}
      </p>

      <p>
        <b>CourseName</b> {post.courseName}
      </p>
      <p>
        <b>University</b> {post.universityName}
      </p>
      <p>
        <b>Category</b> {post.category}
      </p>
      <p>
        <b>Price</b> {post.insertPrice}
      </p>
      <p>
        <b>Tag</b> {post.insertTagsHere}
      </p>
      <p>
        <b>Description</b>: {post.description}
      </p>
      <p>
        <small>
          <b>ID</b>: {post._id}
        </small>
      </p>
      <div className="btn-group">
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <Link to="/cruds" className="btn btn-secondary">
          Cancel{" "}
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default PostDelete;
