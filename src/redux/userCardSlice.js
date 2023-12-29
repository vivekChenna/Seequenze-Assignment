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
    RemoveCard: (state, action) => {
      state.cardData = state.cardData.filter(
        (data) => data.id !== action.payload
      );
    },
  },
});

export const { addCardData, RemoveCard } = userCardSlice.actions;
export default userCardSlice.reducer;
