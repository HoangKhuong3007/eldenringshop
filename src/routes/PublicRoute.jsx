import { Route, Routes } from "react-router-dom";
// import pages
import { App } from "../App";
import { Shop } from "../pages/public/Shop";
import { AboutUs } from "../pages/public/AboutUs";
import { Blog } from "../pages/public/Blog";
import { SignUp } from "../pages/public/SignUp";
import { Login } from "../pages/public/Login";

export const publicRoutes = [
  {
    path: "/",
    element: <App />,
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

  {
    path: "/login",
    element: <Login />,
  },
];
