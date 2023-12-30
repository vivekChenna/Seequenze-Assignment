import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    ToggleSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  },
});

export const { ToggleSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
