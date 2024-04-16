import React, { useState } from "react";
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
import EventInDetail from "./components/Events/EventInDetail";
import CloseIcon from "@mui/icons-material/Close";
const AppLayout = () => {
  const [ban, setban] = useState(true);
  return (
    <>
      <div >
        {/* banner ad */}
        {ban ? (
          <div className="flex w-full sm:mt-28 mt-32 absolute z-50">
            <button>
              <div className="flex justify-center  relative">
                <button
                  className="absolute z-50 text-right sm:w-8/12 w-11/12 p-4 text-white"
                  onClick={() => {
                    setban(false);
                  }}
                >
                  {" "}
                  <div className=" ">
                    <CloseIcon fontSize="large" />
                  </div>
                </button>
                <a
                  href="https://forms.gle/ApXsp5WZD2HixXq27"
                  target="_blank"
                  className="sm:w-8/12 w-11/12"
                >
                  <img
                    className=" border-4  rounded-3xl sm:block hidden shadow-2xl border-white"
                    src="https://res.cloudinary.com/dzkldv06d/image/upload/v1713277189/1_1_r4rcko.png"
                    alt=""
                  />
                  <img
                    className=" border-4 rounded-3xl sm:hidden block shadow-2xl border-white"
                    src="https://res.cloudinary.com/dzkldv06d/image/upload/v1713287370/Untitled_design_5_gedbxl.png"
                    alt=""
                  />
                </a>
              </div>
            </button>
          </div>
        ) : (
          ""
        )}
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
      {
        path: "/events/:id",
        element: <EventInDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
