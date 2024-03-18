import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "./storeUtils";
import { MockData, SomeModel } from "./mockData";

export type SomeTableState = {
  selectedId: number | undefined;
  data: SomeModel[];
};

export const initialState: SomeTableState = {
  selectedId: undefined,
  data: MockData,
};

export const doStuff = createAppAsyncThunk("doStuff", async (props: { someParam: number }, thunkapi) => {
  console.debug(thunkapi.getState().someTable.selectedId);
  console.debug(props);
  thunkapi.dispatch(doSomethingElse());
});

export const doSomethingElse = createAppAsyncThunk("doSomethingElse", async () => {
  console.debug("do something else");
});

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
