import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface logProps {
  logIn: boolean;
}

const initialState: logProps = {
  logIn: false,
};

const LoggedInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogIn: (state, action: PayloadAction<boolean>) => {
      state.logIn = action.payload;
    },
  },
});

export const { setLogIn } = LoggedInSlice.actions;
export default LoggedInSlice.reducer;
