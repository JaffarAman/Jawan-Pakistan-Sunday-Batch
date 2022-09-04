import React from "react";
import { useState } from "react";
import "./App.css";
import AlertCmp from "./Components/AlertCmp";
import HeadingCmp1 from "./Components/HeadingCmp";
import Todo from "./Components/Todo";

const App = () => {
  const [name, setName] = useState("Jaffar");
  // const [name2, setName2] = useState("Talha");
  // const [chilData, setChilData] = useState("");

  // const btnSubmit = () => {
  //   setName("JAFFAR AMAN");
  //   setName2("HM.talha");
  // };

  // console.log(name, "state ");

  // const getData = (data) => {
  //   setChilData(data);
  // };

  const [bool, setBool] = useState("sir aliaksdsakdjl");

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* <h1>{name}</h1>
      <h1>{name2}</h1> */}
      {/* {chilData} */}
      {/* <HeadingCmp1 text="Heading 1" name={name} getData={getData} /> */}
      {/* <HeadingCmp1 text="Heading 2" />
      <HeadingCmp1 text="Heading 3" /> */}
      {/* <button onClick={btnSubmit}>SUBMIT</button> */}

      {/* <HeadingCmp1 bool={true} /> */}

      {/* {bool === "sir ali" ? (
        <h1>SUPER ADMIN</h1>
      ) : bool === "jaffar" ? (
        <h1>ADMMIN</h1>
      ) : (
        <h1>USER</h1>
      )} */}
      {/* <div
        className="box1"
        style={{ backgroundColor: darkMode ? "#000" : "#ffff" }}
      >
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? "White" : "DARK"}
        </button>

        <button className="btn btn-primary">BOOTSTRAP</button>
      </div> */}

      {/* <AlertCmp /> */}
      <Todo />
    </>
  );
};

export default App;
