import { configureStore } from "@reduxjs/toolkit";
import EntertainmentSlice, { entertaiProps } from "./EntertainmentSlice";

const store = configureStore({
  reducer: {
    entertainment: EntertainmentSlice,
  },
});

export type RootState = {
  entertainment: entertaiProps;
};

export default store;
