import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userslice";
const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
export default store;
