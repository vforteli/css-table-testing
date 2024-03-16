import { TableColumn } from "./TableTest";
import { TableCell } from "./TableCell";
import React from "react";

export type TableRowProps<TColKey, TRow> = {
  columns: readonly TableColumn<TColKey, TRow>[];
  row: TRow;
};

const TableRow = <TColKey, TRow>(props: TableRowProps<TColKey, TRow>) => {
  return (
    <tr>
      {props.columns.map((column) => (
        <TableCell key={`data-${column.key}`} data={column.value(props.row)} />
      ))}
    </tr>
  );
};

export const TableRowMemoized = React.memo(TableRow) as typeof TableRow;
