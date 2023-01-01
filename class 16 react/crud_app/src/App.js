import logo from "./logo.svg";
import "./App.css";
import { CreatePost, SignInSide, SignUp } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignInSide />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}

export default App;
