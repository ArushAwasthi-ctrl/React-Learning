import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("pink");
  const [font , setFont] = useState("white");
  return (
    <div className="h-96 w-96" style={{ backgroundColor: color , color : font}}>
      <h1 className="text-8xl  mt-12 md:mt-32">Color Selector</h1>
      <div className="flex  bg-amber-100  text-black p-3 gap-4 font-bold font-stretch-75% text-base mt-11">
        <button
          onClick={() => {
            setColor("red");
            setFont("black");
          }}
          className="bg-red-600 text-2xl "
          type="submit"
        >
          Red
        </button>
        <button onClick={()=> setColor("blue")}  className="bg-blue-800 text-2xl " type="submit">
          Blue
        </button>
        <button onClick={()=> setColor("green")}  className="bg-green-700 text-2xl " type="submit">
          Green
        </button>
        <button onClick={()=> setColor("yellow")}  className="bg-yellow-500 text-2xl " type="submit">
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
