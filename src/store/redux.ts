import { configureStore } from "@reduxjs/toolkit";
import EntertainmentSlice, { entertaiProps } from "./EntertainmentSlice";

const store = configureStore({
  reducer: {
    Entertainment: EntertainmentSlice,
  },
});

export type RootState = {
  entertainment: entertaiProps;
};

export default store;
