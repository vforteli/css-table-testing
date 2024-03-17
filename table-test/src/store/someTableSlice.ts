import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const testRows = 1000;

export type SomeModel = {
  id: number;
  name: string;
  someData: string;
  moreData0: string;
  moreData1: string;
  moreData2: string;
  moreData3: string;
  moreData4: string;
  moreData5: string;
  moreData6: string;
  moreData7: string;
  moreData8: string;
  moreData9: string;
};

const data: SomeModel[] = [...Array(testRows).keys()].map((rowIndex) => ({
  id: rowIndex,
  name: `some name ${rowIndex}`,
  someData: `some content! ${rowIndex}`,
  moreData0: `more content! ${rowIndex}`,
  moreData1: `more content! ${rowIndex}`,
  moreData2: `more content! ${rowIndex}`,
  moreData3: `more content! ${rowIndex}`,
  moreData4: `more content! ${rowIndex}`,
  moreData5: `more content! ${rowIndex}`,
  moreData6: `more content! ${rowIndex}`,
  moreData7: `more content! ${rowIndex}`,
  moreData8: `more content! ${rowIndex}`,
  moreData9: `more content! ${rowIndex}`,
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
      state.data[action.payload.id].moreData0 = action.payload.name;
    },
  },
});

export const { setSelectedId, modifyStuff, updateName } = slice.actions;

export default slice.reducer;
