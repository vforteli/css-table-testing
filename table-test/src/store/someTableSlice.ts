import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MockData, SomeModel } from "../mockData";
import { createAppAsyncThunk, createErrorHandlingAsyncThunk } from "./storeUtils";

export type SomeType = { someParam: number };

export const doStuff = createAppAsyncThunk("doStuff", async (props: SomeType, thunkapi) => {
  console.debug(thunkapi.getState().someTable.selectedId);
  console.debug(props);
  // thunkapi.dispatch(showNotification(props));
});

export const doStuffTesting = createErrorHandlingAsyncThunk(
  "doStuffTesting",
  async (props: SomeType, thunkapi) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.debug(thunkapi.getState().someTable.selectedId);
    console.debug(props);
    console.debug("this will throw an error now!");
    return 42;

    throw new Error("some errorrrr message!");
  },
  "some custom error message here?",
);

export const showNotification = createAppAsyncThunk("errorNotification", async (props: SomeType) => {
  console.debug(props.someParam);
  console.debug("Hu? called by something else, this should send some notification");
});

export const doBlerp = createAsyncThunk("doBlerp", async (props: SomeType) => {
  console.debug(props.someParam);
  console.debug("Hu? called by something else, this should send some notification");
  return 32;
});

export const dostuff = createAsyncThunk("dostuff", async (props: number) => {
  return props;
});

export type SomeTableState = {
  selectedId: number | undefined;
  data: SomeModel[];
};

export const initialSomeTableState: SomeTableState = {
  selectedId: undefined,
  data: MockData,
};

const slice = createSlice({
  name: "someTableSlice",
  initialState: initialSomeTableState,
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
  extraReducers: (builder) => {
    builder.addCase(dostuff.fulfilled, (state, action) => {
      state.selectedId = action.payload;
    });

    builder.addCase(doStuffTesting.pending, () => {
      console.debug("uhhh pending");
    });

    builder.addCase(doStuffTesting.rejected, () => {
      console.debug("nooo rejected");
    });

    builder.addCase(doStuffTesting.fulfilled, (_, action) => {
      console.debug(action.payload);
      console.debug("yaay fulfilled");
    });
  },
});

export const { setSelectedId, modifyStuff, updateName } = slice.actions;

export default slice.reducer;
