import { configureStore } from "@reduxjs/toolkit";

// import reducers
import modalReducers from "./slices/modal/modal";
import navbarReducers from "./slices/navbar/navbar";
import productReducers from "./slices/product/product";
import blogReducers from "./slices/blog/blog";
import accountReducers from "./slices/account/account";
export default configureStore({
  reducer: {
    // modal
    modal: modalReducers,
    // navbar
    navbar: navbarReducers,
    // product
    product: productReducers,
    // blog
    blog: blogReducers,
    // account
    account: accountReducers,
  },
});
