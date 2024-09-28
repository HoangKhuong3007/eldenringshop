import { Route, Routes } from "react-router-dom";
// import pages
import { App } from "../App";
import { Shop } from "../pages/public/Shop";
import { AboutUs } from "../pages/public/Aboutus";
import { Blog } from "../pages/public/Blog";

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

];