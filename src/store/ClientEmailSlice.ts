import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userProps {
  clientEmail: string;
}

const initialState: userProps = {
  clientEmail: "",
};

const clientEmailSlice = createSlice({
  name: "clientEmail",
  initialState,
  reducers: {
    setClientEmail: (state, action: PayloadAction<string>) => {
      state.clientEmail = action.payload;
    },
  },
});

export const { setClientEmail } = clientEmailSlice.actions;
export default clientEmailSlice.reducer;
