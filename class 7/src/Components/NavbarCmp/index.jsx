import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function NavBarCmp() {
  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
          
            <Link to="/about">About</Link>
          
            <Link to="/login">Login</Link>
          </Nav>
        </Container>
      </Navbar> */}
      <section className="navbarApp">
        <div>
          <h6>APP NAVBAR</h6>
        </div>
        <div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "activeLink" : undefined;
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "activeLink" : undefined;
                }}
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive ? "activeLink" : undefined;
                }}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default NavBarCmp;
