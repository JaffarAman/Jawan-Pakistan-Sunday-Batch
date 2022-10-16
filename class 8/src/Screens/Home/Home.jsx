import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarCmp from "../../Components/NavbarCmp";
import {
  AddCounterAction,
  MinusCounterAction,
} from "../../store/Actions/counter";

const Home = () => {
  // let [counter, setCounter] = useState(0);

  const dispatch = useDispatch();
  const selector1 = useSelector((state) => state.addCounterReducer);
  const selector2 = useSelector((state) => state.minusCounterReducer);

  const addCounter = () => {
    // setCounter(++counter);
    dispatch(AddCounterAction());
  };

  const minusCounter = () => {
    // setCounter(--counter);
    dispatch(MinusCounterAction());
  };

  return (
    <div>
      <NavBarCmp />
      Home Page
      <h1>COUNTER</h1>
      <div className="container">
        <h1>{selector1.globalCounter}</h1>
        {/* <h1>{selector2.globalCounter}</h1> */}

        <button className="btn btn-danger mx-2" onClick={minusCounter}>
          -
        </button>
        <button className="btn btn-primary" onClick={addCounter}>
          +
        </button>
      </div>
    </div>
  );
};

export default Home;
