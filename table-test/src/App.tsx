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

  const headerColumnsMemoized: ReadonlyArray<HeaderType> = useMemo(() => {
    const somethingHeaderColumns = [...Array(10).keys()].map((i) => ({ subTitle: `Column ${i}` }) satisfies ColumnType);
    return [
      { title: "Something", headerColumns: [{ subTitle: `Id Column` }], className: "idheader" },
      { title: "Doo", headerColumns: somethingHeaderColumns, className: "stuff" },
      { title: "Bar", headerColumns: somethingHeaderColumns, className: "things" },
      { title: "blerp", headerColumns: somethingHeaderColumns, className: "more" },
    ];
  }, []);

  const dataColumnsMemoized: Record<ColumnNames, TableColumn<SomeModel>> = useMemo(
    () => ({
      id: { value: (row) => <FirstCell row={row} /> },
      name: { value: (row) => <NameCell row={row} /> },
      someData: { value: (row) => row.someData },
      moreData: { value: (row) => row.moreData },
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
