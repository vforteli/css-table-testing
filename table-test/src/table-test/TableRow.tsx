import React from "react";
import { TableCellMemoized } from "./TableCell";
import { ColumnGroup } from "./TableTest";

export type TableRowProps<TColKey, TRow> = {
  rowData: TRow;
  columns: readonly ColumnGroup<TColKey, TRow>[];
};

const TableRow = <TColKey, TRow>(props: TableRowProps<TColKey, TRow>) => {
  return (
    <tr>
      {props.columns
        .flatMap((o) => o.columns)
        .map((column) => (
          <TableCellMemoized key={`data-${column.key}`} data={column.value(props.rowData)} />
        ))}
    </tr>
  );
};

export const TableRowMemoized = React.memo(TableRow) as typeof TableRow;
