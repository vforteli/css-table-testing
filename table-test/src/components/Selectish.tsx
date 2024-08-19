import { useState } from "react";
import "./Selectish.scss";

export type OptionsType<TKey, TValue> = {
  key: TKey;
  value: TValue;
};

export type SelectishProps<TKey, TValue, TAllowClear extends boolean> = TAllowClear extends true
  ? {
      allowClear: TAllowClear;
      onChange: (key: TKey | undefined) => void;
      selectedKey: TKey | undefined;
      options: readonly OptionsType<TKey, TValue>[];
    }
  : {
      allowClear?: TAllowClear;
      onChange: (key: TKey) => void;
      selectedKey: TKey;
      options: readonly OptionsType<TKey, TValue>[];
    };

export function Selectish<TKey, TValue, TAllowClear extends boolean>(props: SelectishProps<TKey, TValue, TAllowClear>) {
  const [selected] = useState<TKey | undefined>(props.selectedKey);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = () => {
    if (selected === undefined && props.allowClear) {
      props.onChange(selected);
    } else if (selected !== undefined) {
      props.onChange(selected);
    }
  };

  return (
    <>
      <button>blerp {JSON.stringify(props.selectedKey)}</button>
    </>
  );
}
