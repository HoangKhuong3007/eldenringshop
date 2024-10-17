import { configureStore } from "@reduxjs/toolkit";

// import reducers
import ModalReducers from "./slices/modal/modal";
import navbarReducers from "./slices/navbar/navbar";
export default configureStore({
  reducer: {
    // modal
    modal: ModalReducers,
    // navbar
    navbar: navbarReducers,
  },
});
