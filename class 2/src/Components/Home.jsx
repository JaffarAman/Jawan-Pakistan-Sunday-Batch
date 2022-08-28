import React, { useState } from "react";
const Home = () => {
  let [value, setValue] = useState(10);

  console.log(value, "state");

  var a = 10;

  const plus = () => {
    setValue(++value);
    console.log("function call", a);
  };
  const minus = () => {
    --a;
  };
  // plus()
  return (
    <div className="box">
      <h1> {value} </h1>
      <button onClick={minus}>-</button>
      <button onClick={() => plus()}>+</button>
    </div>
  );
};

export default Home;
