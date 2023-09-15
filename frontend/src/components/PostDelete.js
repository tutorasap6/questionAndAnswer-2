import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function postDelete(props) {
  const [post, setPost] = useState({});

  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(
    function () {
      async function deletePostById() {
        try {
          const response = await axios.get(`/api/posts/${_id}`);
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
      await axios.delete(`/api/posts/${_id}`);
      navigate("/admin");
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
        <b>CourseName</b>: {post.courseName}
      </p>
      <p>
        <b>UniversityName</b>: {post.universityName}
      </p>
      <p>
        <b>category</b>
        {post.category}
      </p>
      <p>
        <b>Description</b>: {post.description}
      </p>
      <p>
        <b>Price</b>: {post.insertPrice}
      </p>
      <p>
        <b>Tags</b>: {post.insertTagsHere}
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
        <Link to="/admin" className="btn btn-secondary">
          Cancel{" "}
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default postDelete;
