import { configureStore } from "@reduxjs/toolkit";
import userCardSlice from "./userCardSlice";
import ModalSlice from "./ModalSlice";
import sideBarSlice from "./sideBarSlice";
const appStore = configureStore({
  reducer: {
    card: userCardSlice,
    modal: ModalSlice,
    sidebar: sideBarSlice,
  },
});

export default appStore;
