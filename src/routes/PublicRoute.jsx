// import pages
import { App } from "../App";
import { Shop } from "../pages/public/Shop";
import { AboutUs } from "../pages/public/AboutUs";
import { Blog } from "../pages/public/Blog";
import { LoginPage } from "../pages/auth/LoginPage";
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
    path: "/login",
    element: <LoginPage />,
  },
];
