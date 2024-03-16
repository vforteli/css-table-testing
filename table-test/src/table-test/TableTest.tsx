import React from "react";
import { HeaderType, TableTestHeaderMemo } from "./TableTestHeader";
import "./TableTest.scss";
import { TableRowMemoized } from "./TableRow";

export type TableColumn<TKey, TRow> = {
  key: TKey;
  value: (row: TRow) => React.ReactElement | string | number;
};

export type TableTestProps<TRow, TColKey> = {
  header: readonly HeaderType[];
  data: readonly TRow[];
  columns: readonly TableColumn<TColKey, TRow>[];
};

const TableTest = <TRow, TColKey>(props: TableTestProps<TRow, TColKey>) => {
  return (
    <table className="table">
      <TableTestHeaderMemo columns={props.header} />
      <tbody>
        {props.data.map((row, rowIndex) => (
          <TableRowMemoized key={`row-${rowIndex}`} columns={props.columns} row={row} />
        ))}
      </tbody>
    </table>
  );
};

export const TableTestMemo = React.memo(TableTest) as typeof TableTest;
