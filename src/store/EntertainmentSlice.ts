import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import entertainment from "../../type";

export interface entertaiProps {
  entertainment: entertainment[];
}

const initialState: entertaiProps = {
  entertainment: [],
};

const entertainmentSlice = createSlice({
  name: "entertainment",
  initialState,
  reducers: {
    setEntertainment: (state, action: PayloadAction<entertainment[]>) => {
      state.entertainment = action.payload;
    },
  },
});

export const { setEntertainment } = entertainmentSlice.actions;
export default entertainmentSlice.reducer;
