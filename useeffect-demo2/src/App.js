import "./App.css";
import { useState } from "react";
import HookUseEffect from "./component/HookUseEffect";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>

      {show && <HookUseEffect />}
    </div>
  );
}

export default App;
