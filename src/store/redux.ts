import { configureStore } from "@reduxjs/toolkit";
import EntertainmentSlice, { entertaiProps } from "./EntertainmentSlice";
import clientEmailSlice, { userProps } from "./ClientEmailSlice";

const store = configureStore({
  reducer: {
    entertainment: EntertainmentSlice,
    clientEmail: clientEmailSlice,
  },
});

export type RootState = {
  entertainment: entertaiProps;
  clientEmail: userProps;
};

export default store;
