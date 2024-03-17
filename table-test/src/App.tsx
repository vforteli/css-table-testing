import { useMemo } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { FirstCell, NameCell } from "./Columns";
import { SomeModel, modifyStuff, setSelectedId } from "./store/someTableSlice";
import { useAppSelector } from "./store/store";
import { ColumnGroup, TableTestMemo } from "./table-test/TableTest";

type ColumnNames = keyof SomeModel;

function App() {
  const dispatch = useDispatch();
  const selectedId = useAppSelector((s) => s.someTable.selectedId);
  const data = useAppSelector((s) => s.someTable.data);

  const cofsfsdflumns = useMemo(
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
            { key: "name", header: "Name", value: (row) => <NameCell row={row} /> },
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

      <div className="container">
        <div className="wrapper">
          <TableTestMemo data={data} columns={cofsfsdflumns} />
        </div>
      </div>
    </>
  );
}

export default App;
