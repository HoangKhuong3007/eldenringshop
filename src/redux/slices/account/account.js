import { createSlice, combineReducers } from "@reduxjs/toolkit";

const emailSlice = createSlice({
  name: "email",
  initialState: { email: "" },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});
const otpSlice = createSlice({
  name: "otp",
  initialState: { otp: "" },
  reducers: {
    setOtp(state, action) {
      state.otp = action.payload;
    },
  },
});
export const { setEmail } = emailSlice.actions;
export const { setOtp } = otpSlice.actions;

const accountReducers = combineReducers({
  email: emailSlice.reducer,
  otp: otpSlice.reducer,
});

export default accountReducers;
