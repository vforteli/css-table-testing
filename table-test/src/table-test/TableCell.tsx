import React, { ReactNode } from "react";

export type TableCellProps = {
  data: ReactNode;
};

const TableCell = (props: TableCellProps) => {
  return <td>{props.data}</td>;
};

export const TableCellMemoized = React.memo(TableCell);
