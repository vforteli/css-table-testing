type Foo<T> = {
  value: T;
  onChange: (value: T) => void;
  options: ReadonlyArray<T>;
};

type Something = "hurr" | "durr" | "herp" | "derp";

const blaaa = <T>(foo: Foo<T>) => {
  foo.onChange = (t) => {
    console.debug(t);
  };
};

const herp = () => {
  const value: Something = "derp";

  const blaa = blaaa({ value: value, onChange: (v) => console.debug(v), options: ["derkp", "hurr"] as const });
};
