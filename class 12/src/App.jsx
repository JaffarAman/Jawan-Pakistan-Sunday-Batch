import logo from "./logo.svg";
import "./App.css";
import { Typography } from "@mui/material";
import AppBarCmp from "./Components/MuiComponents/AppBarCmp";
import { Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";

function App() {
  const onClick1 = () => {
    console.log("Account function");
  };
  return (
    <>
      <AppBarCmp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
