import { useCallback } from "react";

function UseCallbackDemo() {
  const handleClick = useCallback(() => {
    alert("Clicked!");
  }, []);

  return (
    <>
      <h3>useCallback</h3>
      <button onClick={handleClick}>Click</button>
      <hr />
    </>
  );
}

export default UseCallbackDemo;
