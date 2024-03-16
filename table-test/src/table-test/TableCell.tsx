import { ReactElement } from "react";

export type TableCellProps = {
  data: ReactElement | string | number;
};

export const TableCell = (props: TableCellProps) => {
  return <td>{props.data}</td>;
};
