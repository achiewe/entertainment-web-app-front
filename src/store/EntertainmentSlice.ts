import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import entertainment from "../../type";

export interface entertaiProps {
  entertainment: entertainment[];
}

const getCachedEntertainment = () => {
  const cachedData = localStorage.getItem("entertainment");
  return cachedData ? JSON.parse(cachedData) : [];
};

const initialState: entertaiProps = {
  entertainment: getCachedEntertainment(),
};

const entertainmentSlice = createSlice({
  name: "entertainment",
  initialState,
  reducers: {
    setEntertainment: (state, action: PayloadAction<entertainment[]>) => {
      state.entertainment = action.payload;
      localStorage.setItem("entertainment", JSON.stringify(action.payload));
    },
  },
});

export const { setEntertainment } = entertainmentSlice.actions;
export default entertainmentSlice.reducer;
