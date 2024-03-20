import { AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "./store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch?: AppDispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
}>();

// this is kind of a middleware \o/
export const createErrorHandlingAsyncThunk = <Returned, ThunkArg>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, { state: RootState }>,
) => {
  return createAppAsyncThunk<Returned, ThunkArg>(typePrefix, (arg, thunkAPI) => {
    try {
      return payloadCreator(arg, thunkAPI);
    } catch (err) {
      console.debug(err);
      console.debug("heh");
      return thunkAPI.rejectWithValue(err);
    }
  });
};
