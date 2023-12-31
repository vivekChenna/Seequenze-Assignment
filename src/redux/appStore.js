import { configureStore } from "@reduxjs/toolkit";
import userCardSlice from "./userCardSlice";
import ModalSlice from "./ModalSlice";
import sideBarSlice from "./sideBarSlice";
import cardSlice from "./cardSlice";
const appStore = configureStore({
  reducer: {
    card: userCardSlice,
    modal: ModalSlice,
    sidebar: sideBarSlice,
    cardSlice: cardSlice,
  },
});

export default appStore;
