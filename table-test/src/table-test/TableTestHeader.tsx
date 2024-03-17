import React from "react";
import { ColumnGroup } from "./TableTest";

const TableTestHeader = <TColKey, TRow>(props: { columns: readonly ColumnGroup<TColKey, TRow>[] }) => {
  return (
    <thead>
      <tr>
        {props.columns.map((group) => {
          return (
            <th key={group.key} colSpan={group.columns.length}>
              <div className={`test ${group.className}`}>{group.header}</div>
            </th>
          );
        })}
      </tr>
      <tr>
        {props.columns.flatMap((group) =>
          group.columns.map((column) => {
            return (
              <th key={`subheader-${group.key}-${column.key}`} className={`${group.className} muted`}>
                {column.header}
              </th>
            );
          }),
        )}
      </tr>
    </thead>
  );
};

export const TableTestHeaderMemo = React.memo(TableTestHeader) as typeof TableTestHeader;
