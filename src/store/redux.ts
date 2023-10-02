import { configureStore } from "@reduxjs/toolkit";
import EntertainmentSlice, { entertaiProps } from "./EntertainmentSlice";
import clientEmailSlice, { userProps } from "./ClientEmailSlice";
import LoggedInSlice, { logProps } from "./LoggedInSlice";
import InputFilterSlice, { inputProps } from "./InputFilterSlice";

const store = configureStore({
  reducer: {
    entertainment: EntertainmentSlice,
    clientEmail: clientEmailSlice,
    logIn: LoggedInSlice,
    value: InputFilterSlice,
  },
});

export type RootState = {
  entertainment: entertaiProps;
  clientEmail: userProps;
  logIn: logProps;
  value: inputProps;
};

export default store;
