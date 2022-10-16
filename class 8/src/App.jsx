import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./Components/TodoApp/TodoApp";
import TodoApp from "./Components/TodoApp/TodoApp";
import User from "./Components/User/User";
import ProtectedRoute from "./ProtectedRoute";
import About from "./Screens/About";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";

function App() {
  return (
    <>
      {/* <TodoApp /> */}
      {/* <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/about" element={<h1>ABOUT PAGE</h1>}></Route>
        </Route>
      </Routes> */}

      {/* <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/user">USER</Link> */}

      {/* <Routes>
        <Route path="/" element={<h1>HOME PAGE</h1>} />
        <Route path="/about" element={<h1>ABOUT PAGE</h1>} /> */}
      {/* <Route path="/user/getuser/:name" element={<User />} /> */}
      {/* <Route path="/user">
          <Route path="getuser" element={<h1>GET USER</h1>} />
          <Route path="profile" element={<h1>user profile</h1>} />
        </Route>
        <Route path="/admin">
          <Route path="getuser" element={<h1>GET USER</h1>} />
          <Route path="profile" element={<h1>user profile</h1>} />
        </Route> */}

      {/* <Route path="*" element={<h1> 404 page not found</h1>} />
      </Routes> */}

      <Home />
    </>
  );
}

export default App;
