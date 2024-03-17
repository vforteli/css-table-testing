import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const testRows = 10000;

export type SomeModel = {
  id: number;
  name: string;
  someData: string;
  moreData: string;
};

const data: SomeModel[] = [...Array(testRows).keys()].map((rowIndex) => ({
  id: rowIndex,
  name: `some name ${rowIndex}`,
  someData: `some content! ${rowIndex}`,
  moreData: `more content! ${rowIndex}`,
}));

export type SomeTableState = {
  selectedId: number | undefined;
  data: SomeModel[];
};

export const initialState: SomeTableState = {
  selectedId: undefined,
  data: data,
};

const slice = createSlice({
  name: "someTableSlice",
  initialState: initialState,
  reducers: {
    setSelectedId(state, action: PayloadAction<number | undefined>) {
      state.selectedId = action.payload;
    },
    modifyStuff(state) {
      state.data[2] = { ...state.data[2], name: "sup" };
    },
    updateName(state, action: PayloadAction<{ id: number; name: string }>) {
      state.data[action.payload.id].name = action.payload.name;
      state.data[action.payload.id].moreData = action.payload.name;
    },
  },
});

export const { setSelectedId, modifyStuff, updateName } = slice.actions;

export default slice.reducer;
