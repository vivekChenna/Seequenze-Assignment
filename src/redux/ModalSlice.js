import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
  },

  reducers: {
    OpenModal: (state) => {
      state.isModalOpen = true;
    },
    CloseModal: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { OpenModal, CloseModal } = ModalSlice.actions;
export default ModalSlice.reducer;
