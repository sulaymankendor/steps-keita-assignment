import { configureStore } from "@reduxjs/toolkit";
import authenticationTokenSlice from "../redux/authenticationTokenSlice";

export default configureStore({
  reducer: {
    authenticationToken: authenticationTokenSlice,
  },
});
