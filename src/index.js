import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Team from "./components/TeamPage/Team";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/AboutPage/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events/Events";
const AppLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", // Root path for Home
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
      {
        path: "/Events",
        element: <Events />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
