import { expect, test } from "vitest";
import { setupStore } from "./store";
import { initialSomeTableState, setSelectedId } from "./someTableSlice";

test("should set selectedId", () => {
  const store = setupStore({ someTable: { ...initialSomeTableState, selectedId: 0 } });

  store.dispatch(setSelectedId(42));

  expect(store.getState().someTable.selectedId).toEqual(42);
});
