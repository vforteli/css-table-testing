import React, { ReactNode } from "react";
import { TableRowMemoized } from "./TableRow";
import "./TableTest.scss";
import { TableTestHeaderMemo } from "./TableTestHeader";

export type TableColumn<TColKey, TRow> = {
  key: TColKey;
  header: ReactNode;
  minWidth?: number | undefined;
  value: (row: TRow) => ReactNode;
};

export type ColumnGroup<TColKey, TRow> = {
  key: string;
  header: ReactNode;
  className: string;
  columns: readonly TableColumn<TColKey, TRow>[];
};

export type TableTestProps<TRow, TColKey> = {
  columns: readonly ColumnGroup<TColKey, TRow>[];
  data: readonly TRow[];
};

const TableTest = <TRow, TColKey>(props: TableTestProps<TRow, TColKey>) => {
  return (
    <table className="table">
      <TableTestHeaderMemo columns={props.columns} />
      <tbody>
        {props.data.map((row, rowIndex) => (
          <TableRowMemoized key={`row-${rowIndex}`} columns={props.columns} rowData={row} />
        ))}
      </tbody>
    </table>
  );
};

export const TableTestMemo = React.memo(TableTest) as typeof TableTest;
