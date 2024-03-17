import { useMemo, useState } from "react";
import "./App.css";
import { TableColumn, TableTestMemo } from "./table-test/TableTest";
import { ColumnType, HeaderType } from "./table-test/TableTestHeader";
import { FirstCellMemoized } from "./FirstCell";

export type SomeModel = {
  id: number;
  name: string;
  someData: string;
  moreData: string;
};

const testRows = 10000;

// lets just pretend these come from redux or somewhere else...
const firstHeaderColumn = [{ subTitle: `Column` }];
const somethingHeaderColumns = [...Array(10).keys()].map((i) => ({ subTitle: `Column ${i}` }) satisfies ColumnType);

const header: ReadonlyArray<HeaderType> = [
  { title: "Something", headerColumns: firstHeaderColumn, className: "idheader" },
  { title: "Doo", headerColumns: somethingHeaderColumns, className: "stuff" },
  { title: "Bar", headerColumns: somethingHeaderColumns, className: "things" },
  { title: "blerp", headerColumns: somethingHeaderColumns, className: "more" },
];

const data: SomeModel[] = [...Array(testRows).keys()].map((rowIndex) => ({
  id: rowIndex,
  name: `some name ${rowIndex}`,
  someData: `some content! ${rowIndex}`,
  moreData: `more content! ${rowIndex}`,
}));

// this is a bit lazy...
type ColumnNames = keyof SomeModel;

function App() {
  const [counter, setCounter] = useState(0);
  const [selected, setSelected] = useState<number | undefined>();

  const columnsMemo: TableColumn<ColumnNames, SomeModel>[] = useMemo(() => {
    return [
      {
        key: "id",
        value: (row) => <FirstCellMemoized row={row} isSelected={selected === row.id} setSelected={setSelected} />,
      },
      // { key: "name", value: (row) => row.name },
      // { key: "someData", value: (row) => row.someData },
      // { key: "moreData", value: (row) => row.moreData },
    ];
  }, [selected]);

  return (
    <>
      <input type="number" value={selected} onChange={(e) => setSelected(Number.parseInt(e.currentTarget.value))}></input>
      <button type="button" onClick={() => setCounter((o) => o + 1)}>
        Clicky here {counter} {selected}
      </button>
      <div className="container">
        <div className="wrapper">
          <TableTestMemo header={header} data={data} columns={columnsMemo} />
        </div>
      </div>
    </>
  );
}

export default App;
