import { useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef();

  return (
    <>
      <h3>useRef</h3>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
      <hr />
    </>
  );
}

export default UseRefDemo;
