import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { doIncre } from "./store/action/homeAction";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const callInre = () => {
    // dispatch({ type: "INCRE", val: 4 })
    dispatch(doIncre());
  };

  return (
    <div className="App">
      <button onClick={() => callInre()}>Add Username</button>
    </div>
  );
}

export default App;
