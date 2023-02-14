import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div className="user-select-none">
      <Navbar />
      <Container className="mt-5 mx-auto w-50">
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
