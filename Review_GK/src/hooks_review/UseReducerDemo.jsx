import { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
}

function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h3>useReducer</h3>
      <p>{count}</p>
      <button onClick={() => dispatch("inc")}>+</button>
      <button onClick={() => dispatch("dec")}>-</button>
      <hr />
    </>
  );
}

export default UseReducerDemo;
