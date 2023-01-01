import React from "react";
import axios from "axios";

const CreatePost = () => {
  const createPostHandler = () => {
    axios
      .post(
        "https://vivacious-slug-attire.cyclic.app/api/post",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.catch(err));
  };
  return (
    <div>
      <h1>CreatePost</h1>
      <button onClick={createPostHandler}>CREATE POST</button>
    </div>
  );
};

export default CreatePost;
