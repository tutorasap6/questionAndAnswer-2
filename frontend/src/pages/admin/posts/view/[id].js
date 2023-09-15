import React, { useState, useEffect } from "react";
import axios from "axios";

function CrudDetails(params) {
  const [crud, setCrud] = useState({});
  const { id } = params;

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

  return (
    <div className="container">
      <h2>{crud.questionTitle}</h2>

      <p>
        <b>Course Name</b>: {crud.courseName}
      </p>

      <p>
        <b>Course Code</b>: {crud.courseCode}
      </p>
      <p>
        <b>University</b>: {crud.universityName}
      </p>
      <p>
        <b>Category</b>: {crud.category}
      </p>
      <p>
        <b>Price</b>: {crud.insertPrice}
      </p>
      <p>
        <b>Tag</b>: {crud.insertTagsHere}
      </p>
      <p>
        <b>Description</b>: {crud.description}
      </p>
      <hr />
    </div>
  );
}

export default CrudDetails;
