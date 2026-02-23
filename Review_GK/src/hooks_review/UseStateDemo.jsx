import { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>useState</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <hr />
    </>
  );
}

export default UseStateDemo;
