import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { name } = useParams();
  console.log(name, "name");

  return <div>User {name}</div>;
};

export default User;
