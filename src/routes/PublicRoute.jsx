import { Route, Routes } from "react-router-dom";
// import pages
import { App } from "../App";
import { Shop } from "../pages/public/Shop";

export const publicRoutes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];