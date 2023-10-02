import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface inputProps {
  value: string;
}

const initialState: inputProps = {
  value: " ",
};

const InputFilterSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = InputFilterSlice.actions;
export default InputFilterSlice.reducer;
