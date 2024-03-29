import { useMemo } from "react";
import "./App.css";
import { FirstCell, NameCell } from "./Columns";
import { ColumnNames, SomeModel } from "./store/mockData";
import { doBlerp, doStuff, doStuffTesting, modifyStuff, setSelectedId, showNotification } from "./store/someTableSlice";
import { useAppDispatch, useAppSelector } from "./store/store";
import { ColumnGroup, TableTestMemo } from "./table-test/TableTest";

function App() {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector((s) => s.someTable.selectedId);
  const data = useAppSelector((s) => s.someTable.data);

  const columns = useMemo(
    () =>
      [
        {
          key: "idheader",
          className: "idheader",
          header: "Something",
          columns: [{ key: "id", header: "Id", value: (row) => <FirstCell row={row} /> }],
        },
        {
          key: "stuff",
          className: "stuff",
          header: "Stuff",
          columns: [
            { key: "name", minWidth: 300, header: "Name", value: (row) => <NameCell row={row} /> },
            { key: "someData", header: "Some data", value: (row) => row.someData },
          ],
        },
        {
          key: "things",
          className: "things",
          header: "Things",
          columns: [
            { key: "moreData0", header: "More data 0", value: (row) => row.moreData0 },
            { key: "moreData1", header: "More data 1", value: (row) => row.moreData1 },
            { key: "moreData2", header: "More data 2", value: (row) => row.moreData2 },
          ],
        },
        {
          key: "more",
          className: "more",
          header: "More",
          columns: [
            { key: "moreData3", header: "More data 3", value: (row) => row.moreData3 },
            { key: "moreData4", header: "More data 4", value: (row) => row.moreData4 },
            { key: "moreData5", header: "More data 5", value: (row) => row.moreData5 },
            { key: "moreData6", header: "More data 6", value: (row) => row.moreData6 },
            { key: "moreData7", header: "More data 7", value: (row) => row.moreData7 },
            { key: "moreData8", header: "More data 8", value: (row) => row.moreData8 },
            { key: "moreData9", header: "More data 9", value: (row) => row.moreData9 },
          ],
        },
      ] satisfies ColumnGroup<ColumnNames, SomeModel>[],
    [],
  );

  return (
    <>
      <input type="number" value={selectedId ?? ""} onChange={(e) => dispatch(setSelectedId(Number.parseInt(e.currentTarget.value)))}></input>
      <button onClick={() => dispatch(modifyStuff())}>Modify stuff</button>
      <button onClick={() => dispatch(doStuff({ someParam: 5 }))}>do stuff</button>
      <button onClick={() => dispatch(doStuffTesting({ someParam: 5 }))}>do stuff</button>
      <button onClick={() => dispatch(showNotification({ someParam: 42 }))}>do stuff</button>
      <button onClick={() => dispatch(doBlerp({ someParam: 42 }))}>do stuff</button>

      <div className="container">
        <div className="wrapper">
          <TableTestMemo data={data} columns={columns} />
        </div>
      </div>
    </>
  );
}

export default App;
