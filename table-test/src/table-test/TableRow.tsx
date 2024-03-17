import React from "react";
import { TableCellMemoized } from "./TableCell";
import { Key, TableColumn } from "./TableTest";

export type TableRowProps<TColKey extends Key, TRow> = {
  rowData: TRow;
  columns: Record<TColKey, TableColumn<TRow>>;
};

const TableRow = <TColKey extends Key, TRow>(props: TableRowProps<TColKey, TRow>) => {
  return (
    <tr>
      {Object.entries(props.columns).map(([key, column]) => (
        <TableCellMemoized key={`data-${key}`} data={(column as TableColumn<TRow>).value(props.rowData)} />
      ))}
    </tr>
  );
};

export const TableRowMemoized = React.memo(TableRow) as typeof TableRow;
