import React from "react";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";

const App = () => {
  const styles = {
    backgroundColor: "orange",
  };

  var myName = "jaffar aman";

  return (
    <React.Fragment>
      {/* <div className="box"> */}
      {/* <h1 style={styles}>HELLO CLASS</h1>
        <h1 style={{ backgroundColor: "purple" }}>HELLO WORLD</h1> */}
      {/* <h1>HELLO {myName} </h1> */}
      {/* </div> */}

      <Home />
      {/* <About /> */}
    </React.Fragment>
  );
};

export default App;
