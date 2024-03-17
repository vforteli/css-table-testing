import { AsyncThunk, AsyncThunkOptions, AsyncThunkPayloadCreator, Dispatch, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";

type AsyncThunkConfig = {
  state?: unknown;
  dispatch?: Dispatch;
  extra?: unknown;
  rejectValue?: unknown;
  serializedErrorType?: unknown;
};

type TypedCreateAsyncThunk<ThunkApiConfig extends AsyncThunkConfig> = <Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
  options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>,
) => AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;

export const createAppAsyncThunk: TypedCreateAsyncThunk<{
  state: RootState;
}> = createAsyncThunk;
