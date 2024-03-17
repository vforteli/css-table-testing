import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type SomeTableState = {
  selectedId: number | undefined;
};

export const initialState: SomeTableState = {
  selectedId: undefined,
};

const slice = createSlice({
  name: "someTableSlice",
  initialState: initialState,
  reducers: {
    setSelectedId(state, action: PayloadAction<number | undefined>) {
      state.selectedId = action.payload;
    },
  },
});

export const { setSelectedId } = slice.actions;

export default slice.reducer;
