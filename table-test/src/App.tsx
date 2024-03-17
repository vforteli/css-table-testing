import { useMemo } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { FirstCell, NameCell } from "./Columns";
import { SomeModel, modifyStuff, setSelectedId } from "./store/someTableSlice";
import { useAppSelector } from "./store/store";
import { TableColumn, TableTestMemo } from "./table-test/TableTest";
import { ColumnType, HeaderType } from "./table-test/TableTestHeader";

type ColumnNames = keyof SomeModel;

function App() {
  const dispatch = useDispatch();
  const selectedId = useAppSelector((s) => s.someTable.selectedId);
  const data = useAppSelector((s) => s.someTable.data);

  const headerColumnsMemoized = useMemo(() => {
    const somethingHeaderColumns = [...Array(10).keys()].map((i) => ({ subTitle: `Column ${i}` }) satisfies ColumnType);
    return [
      { title: "Something", key: "something", headerColumns: [{ subTitle: `Id Column` }], className: "idheader" },
      { title: "Doo", key: "Doo", headerColumns: somethingHeaderColumns, className: "stuff" },
      { title: "Bar", key: "Bar", headerColumns: somethingHeaderColumns, className: "things" },
      { title: "blerp", key: "Blerp", headerColumns: somethingHeaderColumns, className: "more" },
    ] satisfies ReadonlyArray<HeaderType>;
  }, []);

  const dataColumnsMemoized: Record<ColumnNames, TableColumn<SomeModel>> = useMemo(
    () => ({
      id: { value: (row) => <FirstCell row={row} /> },
      name: { value: (row) => <NameCell row={row} /> },
      someData: { value: (row) => row.someData },
      moreData0: { value: (row) => row.moreData0 },
      moreData1: { value: (row) => row.moreData1 },
      moreData2: { value: (row) => row.moreData2 },
      moreData3: { value: (row) => row.moreData3 },
      moreData4: { value: (row) => row.moreData4 },
      moreData5: { value: (row) => row.moreData5 },
      moreData6: { value: (row) => row.moreData6 },
      moreData7: { value: (row) => row.moreData7 },
      moreData8: { value: (row) => row.moreData8 },
      moreData9: { value: (row) => row.moreData9 },
    }),
    [],
  );

  return (
    <>
      <input type="number" value={selectedId ?? ""} onChange={(e) => dispatch(setSelectedId(Number.parseInt(e.currentTarget.value)))}></input>
      <button onClick={() => dispatch(modifyStuff())}>Modify stuff</button>

      <div className="container">
        <div className="wrapper">
          <TableTestMemo headerColumns={headerColumnsMemoized} data={data} columns={dataColumnsMemoized} />
        </div>
      </div>
    </>
  );
}

export default App;
