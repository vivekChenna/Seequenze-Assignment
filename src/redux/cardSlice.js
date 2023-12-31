import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cardSlice",
  initialState: {
    cardData: null,
  },

  reducers: {
    storeCardData: (state, actions) => {
      state.cardData = actions.payload;
    },
  },
});

export const { storeCardData } = cardSlice.actions;

export default cardSlice.reducer;
