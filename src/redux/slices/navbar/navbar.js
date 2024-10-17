import { createSlice, combineReducers } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    isToggleNavbar: false,
  },
  reducers: {
    toggleNavbarOn: (state) => {
      state.isToggleModal = true;
    },
    toggleNavbarOff: (state) => {
      state.isToggleModal = false;
    },
  },
});

const animateNavbarSlice = createSlice({
  name: "animateNavbar",
  initialState: {
    isToggleNavbar: false,
  },
  reducers: {
    toggleAnimateNavbarOn: (state) => {
      state.isToggleModal = true;
    },
    toggleAnimateNavbarOff: (state) => {
      state.isToggleModal = false;
    },
  },
});
// export actions
export const { toggleNavbarOn, toggleNavbarOff } = navbarSlice.actions;
export const { toggleAnimateNavbarOn, toggleAnimateNavbarOff } =
  animateNavbarSlice.actions;
// combine reducers
const navbarReducers = combineReducers({
  navbar: navbarSlice.reducer,
  animateNavbar: animateNavbarSlice.reducer,
});

export default navbarReducers;
