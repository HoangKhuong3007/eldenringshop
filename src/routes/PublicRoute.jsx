import { Route, Routes } from "react-router-dom";
// import pages
import { App } from "../App";
import { Shop } from "../pages/public/Shop";
import { AboutUs } from "../pages/public/AboutUs";
import { Blog } from "../pages/public/Blog";
import { SignUp } from "../pages/public/SignUp";
import { Home } from "../pages/public/Home";

export const publicRoutes = [
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/shop",
    element: <Shop />,
  },

  {
    path: "/aboutus",
    element: <AboutUs />,
  },

  {
    path: "/blog",
    element: <Blog />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
];
