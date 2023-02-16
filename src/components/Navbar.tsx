import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavigationBar = (props: {
  name: string;
  setName: (name: string) => void;
}) => {
  const logout = async () => {
    await fetch("http://127.0.0.1:8080/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    props.setName("");
  };

  let menu;
  if (props.name === "") {
    menu = (
      <>
        <Nav.Link as={NavLink} to="./login">
          Login
        </Nav.Link>
        <Nav.Link as={NavLink} to="./signup">
          Sign Up
        </Nav.Link>
      </>
    );
  } else {
    menu = (
      <>
        <Nav.Link as={NavLink} to="./login" onClick={logout}>
          Logout
        </Nav.Link>
      </>
    );
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="mb-5">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"}>
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-end">{menu}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
