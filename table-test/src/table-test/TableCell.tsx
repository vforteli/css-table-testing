import React from "react";
import { ReactElement } from "react";

export type TableCellProps = {
  data: ReactElement | string | number;
};

const TableCell = (props: TableCellProps) => {
  return <td>{props.data}</td>;
};

export const TableCellMemoized = React.memo(TableCell);
