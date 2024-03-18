import React from "react";
import { ColumnGroup } from "./TableTest";

const TableTestHeader = <TColKey, TRow>(props: { columns: readonly ColumnGroup<TColKey, TRow>[] }) => {
  return (
    <thead>
      <tr>
        {props.columns.map((group) => (
          <th key={group.key} colSpan={group.columns.length}>
            <div className={`test ${group.className}`}>{group.header}</div>
          </th>
        ))}
      </tr>
      <tr>
        {props.columns.flatMap((group) =>
          group.columns.map((column) => (
            <th key={`subheader-${group.key}-${column.key}`} style={{ minWidth: column.minWidth }} className={`${group.className} muted`}>
              {column.header}
            </th>
          )),
        )}
      </tr>
    </thead>
  );
};

export const TableTestHeaderMemo = React.memo(TableTestHeader) as typeof TableTestHeader;
