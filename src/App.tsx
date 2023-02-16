import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";

const App = (props: { name: string; setName: (name: string) => void }) => {
  return (
    <div className="user-select-none">
      <Navbar name={props.name} setName={props.setName} />
      <Container className="mt-5 mx-auto w-50">
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
