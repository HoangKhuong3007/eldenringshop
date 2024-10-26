// import pages
import { ProductManager } from "../pages/private/ProductManager";
import { AccountManager } from "../pages/private/AccountManager";
import { BlogManager } from "../pages/private/BlogManager";
import { OrderManager } from "../pages/private/OrderManager";
export const privateRoutes = [
  {
    path: "/dashboard/product",
    element: <ProductManager />,
  },
  {
    path: "/dashboard/products/category/:cateId",
    element: <ProductManager />,
  },
  {
    path: "/dashboard/account",
    element: <AccountManager />,
  },
  {
    path: "/dashboard/blogs",
    element: <BlogManager />,
  },
  {
    path: "/dashboard/order",
    element: <OrderManager />,
  },
];
