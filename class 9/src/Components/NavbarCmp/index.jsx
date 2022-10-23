import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  const selector = useSelector((state) => state.addCounterReducer);

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="px-5 d-flex justify-content-between"
      >
        <section className=" d-flex align-items-center">
          <Navbar.Brand>{selector?.name}</Navbar.Brand>
          <div className="d-flex gap-3 ">
            <Link to="/" className="text-white">
              COUNTER
            </Link>
            <Link className="text-white" to="/store">
              STORE
            </Link>
          </div>
        </section>

        <div className="text-white d-flex gap-2">
          <h4 className="text-white">Counter: </h4>
          <h4 className="text-white">{selector.globalCounter}</h4>
        </div>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
