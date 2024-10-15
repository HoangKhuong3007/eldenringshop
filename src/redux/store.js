import { configureStore } from "@reduxjs/toolkit";

// import reducers
import ModalReducers from "./slices/modal/modal";
export default configureStore({
  reducer: {
    // modal
    modal: ModalReducers,
  },
});
