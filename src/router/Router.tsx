import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Container } from "react-bootstrap";
import NavigationBar from "../components/Navbar";
import { useState } from "react";

const Router = () => {
  const [name, setName] = useState("");
  return (
    <>
      <NavigationBar name={name} setName={setName} />
      <Container className="mt-5 mx-auto w-50 user-select-none">
        <Routes>
          <Route index path="/" element={<Home name={name} />} />
          <Route path="/login" element={<Login setName={setName} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/policy" element="our policy here" />
        </Routes>
      </Container>
    </>
  );
};

export default Router;
