// import pages
import { App } from "../App";
import { LoginPage } from "../pages/auth/LoginPage";
import { SignupPage } from "../pages/auth/SignupPage";
import { ForgetPage } from "../pages/auth/ForgetPage";
import { ShopPage } from "../pages/public/ShopPage";
import { ProductDetail } from "../pages/public/ProductDetail";
import { CartPage } from "../pages/public/CartPage";
import { CheckoutPage } from "../pages/public/CheckoutPage";
import { BlogPage } from "../pages/public/BlogPage";
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
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/blogs",
    element: <BlogPage />,
  },
];
