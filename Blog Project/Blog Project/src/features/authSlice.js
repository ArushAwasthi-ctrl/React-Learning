import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    Logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { Login, Logout } = authSlice.actions;
