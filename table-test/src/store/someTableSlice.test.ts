import { expect, test } from "vitest";
import { setupStore } from "./store";
import { dostuff, initialSomeTableState, setSelectedId } from "./someTableSlice";

test("should set selectedId", async () => {
  const store = setupStore({ someTable: { ...initialSomeTableState, selectedId: 0 } });

  await store.dispatch(dostuff(42));

  expect(store.getState().someTable.selectedId).toEqual(42);
});
