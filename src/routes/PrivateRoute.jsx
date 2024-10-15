// import pages
import { ProductManager } from "../pages/private/ProductManager";
import { AccountManager } from "../pages/private/AccountManager";
export const privateRoutes = [
  {
    path: "/dashboard/product",
    element: <ProductManager />,
  },
  {
    path: "/dashboard/account",
    element: <AccountManager />,
  },
];
