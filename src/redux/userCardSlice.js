import { createSlice } from "@reduxjs/toolkit";

const userCardSlice = createSlice({
  name: "card",
  initialState: {
    cardData: [],
  },
  reducers: {
    addCardData: (state, action) => {
      state.cardData.push(action.payload);
    },
  },
});

export const { addCardData } = userCardSlice.actions;
export default userCardSlice.reducer;
