import { configureStore } from "@reduxjs/toolkit";
import userCardSlice from "./userCardSlice";
const appStore = configureStore({
  reducer: {
    card: userCardSlice,
  },
});

export default appStore;
