import { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count thay đổi:", count);
  }, [count]);

  return (
    <>
      <h3>useEffect</h3>
      <button onClick={() => setCount(count + 1)}>Click ({count})</button>
      <hr />
    </>
  );
}

export default UseEffectDemo;
