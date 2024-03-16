import React from "react";

export type HeaderType = {
  title: string;
  headerColumns: readonly ColumnType[];
  className: string;
};

export type ColumnType = {
  subTitle: string;
};

const TableTestHeader = (props: { columns: ReadonlyArray<HeaderType> }) => {
  console.debug("hu?");
  return (
    <thead>
      <tr>
        {props.columns.map((o) => {
          return (
            <th key={o.title} colSpan={o.headerColumns.length}>
              <div className={`test ${o.className}`}>{o.title}</div>
            </th>
          );
        })}
      </tr>
      <tr>
        {props.columns.flatMap((o) =>
          o.headerColumns.map((c, i) => {
            return (
              <th key={`subheader-${i}-${o.title}`} className={`${o.className} muted`}>
                {c.subTitle}
              </th>
            );
          }),
        )}
      </tr>
    </thead>
  );
};

export const TableTestHeaderMemo = React.memo(TableTestHeader);
