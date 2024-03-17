import React from "react";
import { TableRowMemoized } from "./TableRow";
import "./TableTest.scss";
import { HeaderType, TableTestHeaderMemo } from "./TableTestHeader";

export type Key = string | number | symbol;

export type TableColumn<TRow> = {
  value: (row: TRow) => React.ReactElement | string | number;
};

export type TableTestProps<TRow, TColKey extends Key> = {
  headerColumns: readonly HeaderType[];
  columns: Record<TColKey, TableColumn<TRow>>;
  data: readonly TRow[];
};

const TableTest = <TRow, TColKey extends Key>(props: TableTestProps<TRow, TColKey>) => {
  return (
    <table className="table">
      <TableTestHeaderMemo columns={props.headerColumns} />
      <tbody>
        {props.data.map((row, rowIndex) => (
          <TableRowMemoized key={`row-${rowIndex}`} columns={props.columns} rowData={row} />
        ))}
      </tbody>
    </table>
  );
};

export const TableTestMemo = React.memo(TableTest) as typeof TableTest;
