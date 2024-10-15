import { createSlice, combineReducers } from "@reduxjs/toolkit";

// add
const AddProductSlice = createSlice({
  name: "addProductModal",
  initialState: {
    isToggleModal: false,
  },
  reducers: {
    toggleAddProductModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
  },
});
const AddAccountSlice = createSlice({
  name: "addAccountModal",
  initialState: {
    isToggleModal: false,
  },
  reducers: {
    toggleAddAccountModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
  },
});
// update
const UpdateProductSlice = createSlice({
  name: "updateProductModal",
  initialState: {
    isToggleModal: false,
  },
  reducers: {
    toggleUpdateProductModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
  },
});
// delete
const DelProductSlice = createSlice({
  name: "delProductModal",
  initialState: {
    isToggleModal: false,
  },
  reducers: {
    toggleDelProductModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
  },
});
const blockAccountSlice = createSlice({
  name: "blockAccountModal",
  initialState: {
    isToggleModal: false,
  },
  reducers: {
    toggleBlockAccountModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
  },
});
// export actions
export const { toggleAddProductModal } = AddProductSlice.actions;
export const { toggleUpdateProductModal } = UpdateProductSlice.actions;
export const { toggleDelProductModal } = DelProductSlice.actions;
export const { toggleAddAccountModal } = AddAccountSlice.actions;
export const { toggleBlockAccountModal } = blockAccountSlice.actions;

// combine reducer

const ModalReducers = combineReducers({
  addProductModal: AddProductSlice.reducer,
  updateProductModal: UpdateProductSlice.reducer,
  delProductModal: DelProductSlice.reducer,
  addAccountModal: AddAccountSlice.reducer,
  blockAccountModal: blockAccountSlice.reducer,
});
export default ModalReducers;
