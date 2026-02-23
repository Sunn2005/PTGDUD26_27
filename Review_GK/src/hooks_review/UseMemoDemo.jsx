import { useMemo, useState } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => count * 2, [count]);

  return (
    <>
      <h3>useMemo</h3>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
    </>
  );
}

export default UseMemoDemo;
