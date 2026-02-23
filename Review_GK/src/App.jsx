import UseStateDemo from "./hooks_review/UseStateDemo";
import UseEffectDemo from "./hooks_review/UseEffectDemo";
import UseReducerDemo from "./hooks_review/UseReducerDemo";
import UseRefDemo from "./hooks_review/UseRefDemo";
import UseMemoDemo from "./hooks_review/UseMemoDemo";
import UseCallbackDemo from "./hooks_review/UseCallbackDemo";

import CrudPage from "./api_crud/CRUDPage";

function App() {
  return (
    <>
      {/* <h1>BÀI 1 – REACT HOOKS</h1>

      <UseStateDemo />
      <UseEffectDemo />
      <UseReducerDemo />
      <UseRefDemo />
      <UseMemoDemo />
      <UseCallbackDemo /> */}

      <hr />

      <h1>BÀI 2 – CRUD API</h1>
      <CrudPage />
    </>
  );
}

export default App;
