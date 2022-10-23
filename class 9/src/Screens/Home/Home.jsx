import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarCmp from "../../Components/NavbarCmp";
import {
  AddCounterAction,
  MinusCounterAction,
} from "../../store/Actions/counter";

const Home = () => {
  const dispatch = useDispatch();

  const addCounter = () => {
    dispatch(AddCounterAction());
  };

  const minusCounter = () => {
    dispatch(MinusCounterAction());
  };

  return (
    <>
      <NavBarCmp />
      <div className="container w-100 ">
        <div className="container">
          <button className="btn btn-danger mx-2" onClick={minusCounter}>
            MINUS
          </button>
          <button className="btn btn-primary" onClick={addCounter}>
            PLUS
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
