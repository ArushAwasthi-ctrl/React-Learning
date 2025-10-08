import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [val, setVal] = useState(10);

  const increment = () => {
    if (val < 20) {
      setVal(val + 1);
    }
  };

  const decrement = () => {
    if (val > 0) {
      setVal(val - 1);
    }
  };

  return (
    <>
      <h2>Hello {val}</h2>

      {val < 20 && (
        <button onClick={increment} type="button">
          Increment {val}
        </button>
      )}

      {val > 0 && (
        <button id="btn" onClick={decrement} type="button">
          Decrement {val}
        </button>
      )}

      <h1>Notifications {val}</h1>
    </>
  );
}

export default App;
