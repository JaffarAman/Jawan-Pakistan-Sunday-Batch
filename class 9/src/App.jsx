import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Store from "./Screens/Store/Store";
import AddToCart from "./Screens/AddToCart/AddToCart";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
    </>
  );
}

export default App;
