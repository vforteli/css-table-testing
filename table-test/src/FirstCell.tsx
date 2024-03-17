import React from "react";
import { SomeModel } from "./App";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./store/store";
import { setSelectedId } from "./store/someTableSlice";

export type FirstCellProps = {
  row: SomeModel;
};

const FirstCell = ({ row }: FirstCellProps) => {
  const dispatch = useDispatch();
  const isSelected = useAppSelector((s) => s.someTable.selectedId === row.id);

  return (
    <>
      <button type="button" onClick={() => dispatch(setSelectedId(row.id))}>
        {row.id}
      </button>
      {isSelected && "yup"}
    </>
  );
};

export const FirstCellMemoized = React.memo(FirstCell);
