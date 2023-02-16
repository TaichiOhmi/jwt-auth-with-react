import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useEffect, useState } from "react";
import NavigationBar from "../components/Navbar";

const Router = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://127.0.0.1:8080/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      setName(content.name);
    })();
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavigationBar name={name} setName={setName} />
          <App name={name} setName={setName} />
        </>
      ),
      children: [
        { index: true, element: <Home name={name} /> },
        { path: "/login", element: <Login setName={setName} /> },
        { path: "/signup", element: <Register /> },
        { path: "/policy", element: "our policy here" },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default Router;
