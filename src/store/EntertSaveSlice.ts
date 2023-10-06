import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import entertainmentType from "../../type";

export interface FilteredEnt {
  filtered: entertainmentType[] | undefined;
}

const initialState: FilteredEnt = {
  filtered: undefined,
};

const EntertSaveSlice = createSlice({
  name: "filteredEnt",
  initialState,
  reducers: {
    setFilteredEnt: (state, action: PayloadAction<entertainmentType[]>) => {
      state.filtered = action.payload;
    },

    setFilteredUndefined: (state) => {
      state.filtered = undefined;
    },
  },
});

export const { setFilteredEnt, setFilteredUndefined } = EntertSaveSlice.actions;
export default EntertSaveSlice.reducer;
