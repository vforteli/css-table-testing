import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MockData, SomeModel } from "./mockData";
import { createAppAsyncThunk, createErrorHandlingAsyncThunk } from "./storeUtils";

export type ActionType = { someParam: number };

export const doStuff = createAppAsyncThunk("doStuff", async (props: ActionType, thunkapi) => {
  console.debug(thunkapi.getState().someTable.selectedId);
  console.debug(props);
  thunkapi.dispatch(showNotification(props));
});

export const doStuffTesting = createErrorHandlingAsyncThunk("doStuffTesting", async (props: ActionType, thunkapi) => {
  console.debug(thunkapi.getState().someTable.selectedId);
  console.debug(props);
  thunkapi.dispatch(showNotification(props));
});

export const showNotification = createAppAsyncThunk("errorNotification", async (props: ActionType) => {
  console.debug(props.someParam);
  console.debug("Hu? called by something else, this should send some notification");
});

export const doBlerp = createAsyncThunk("doBlerp", async (props: ActionType) => {
  console.debug(props.someParam);
  console.debug("Hu? called by something else, this should send some notification");
});

export type SomeTableState = {
  selectedId: number | undefined;
  data: SomeModel[];
};

export const initialState: SomeTableState = {
  selectedId: undefined,
  data: MockData,
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
