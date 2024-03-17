import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SomeModel, setSelectedId, updateName } from "./store/someTableSlice";
import { useAppSelector } from "./store/store";

export type CellProps = {
  row: SomeModel;
};

export const FirstCell = React.memo(({ row }: CellProps) => {
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
});

export const NameCell = React.memo(({ row }: CellProps) => {
  const dispatch = useDispatch();
  const isSelected = useAppSelector((s) => s.someTable.selectedId === row.id);
  const [name, setName] = useState(row.name);
  const save = () => {
    dispatch(updateName({ id: row.id, name: name }));
  };

  return (
    <>
      {isSelected ? (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)}></input>
          <button type="button" onClick={() => save()}>
            Update
          </button>
        </>
      ) : (
        row.name
      )}
    </>
  );
});
