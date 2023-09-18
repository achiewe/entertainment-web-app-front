import { configureStore } from "@reduxjs/toolkit";
import EntertainmentSlice, { entertaiProps } from "./EntertainmentSlice";
import clientEmailSlice, { userProps } from "./ClientEmailSlice";
import LoggedInSlice, { logProps } from "./LoggedInSlice";

const store = configureStore({
  reducer: {
    entertainment: EntertainmentSlice,
    clientEmail: clientEmailSlice,
    logIn: LoggedInSlice,
  },
});

export type RootState = {
  entertainment: entertaiProps;
  clientEmail: userProps;
  logIn: logProps;
};

export default store;
