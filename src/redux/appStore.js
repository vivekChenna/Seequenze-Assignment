import { configureStore } from "@reduxjs/toolkit";
import userCardSlice from "./userCardSlice";
import ModalSlice from "./ModalSlice";
const appStore = configureStore({
  reducer: {
    card: userCardSlice,
    modal: ModalSlice,
  },
});

export default appStore;
