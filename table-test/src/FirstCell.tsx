import React from "react";
import { SomeModel } from "./App";

export type FirstCellProps = {
  setSelected: (selected: number) => void;
  isSelected: boolean;
  row: SomeModel;
};

const FirstCell = ({ setSelected, isSelected, row }: FirstCellProps) => {
  return (
    <>
      <button type="button" onClick={() => setSelected(row.id)}>
        {row.id}
      </button>
      {isSelected && "yup, is selected"}
    </>
  );
};

export const FirstCellMemoized = React.memo(FirstCell);
