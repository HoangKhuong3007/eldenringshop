// import pages
import { App } from "../App";
import { LoginPage } from "../pages/auth/LoginPage";
import { SignupPage } from "../pages/auth/SignupPage";
import { ForgetPage } from "../pages/auth/ForgetPage";
import { ShopPage } from "../pages/public/ShopPage";
import { ProductDetail } from "../pages/public/ProductDetail";
export const publicRoutes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/forget",
    element: <ForgetPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/productdetail",
    element: <ProductDetail />,
  },
];
