import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./Components/TodoApp/TodoApp";
import TodoApp from "./Components/TodoApp/TodoApp";
import ProtectedRoute from "./ProtectedRoute";
import About from "./Screens/About";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";

function App() {
  return (
    <>
      {/* <TodoApp /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/about" element={<h1>ABOUT PAGE</h1>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
