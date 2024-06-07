import { createSlice } from "@reduxjs/toolkit";

export const authenticationTokenSlice = createSlice({
  name: "authTokenSlice",
  initialState: {
    value: "",
  },
  reducers: {
    token: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { token } = authenticationTokenSlice.actions;

export default authenticationTokenSlice.reducer;
