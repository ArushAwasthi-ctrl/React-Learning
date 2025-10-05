import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumber] = useState(false);
  const [isSymbolsAllowed, setSymbol] = useState(false);
  const [password, setPassword] = useState("");

  // Password generator function
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "0123456789";
    if (isSymbolsAllowed) str += "!@#$%^&*(){}[]~'";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [isNumberAllowed, isSymbolsAllowed, length]);

  // Copy password function
  const copyToClipboard = useCallback(() => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  }, [password]);

  return (
    <div className="w-5xl max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
      <h2 className="text-amber-50 text-2xl mb-3">Password Generator</h2>

      {/* Password Display */}
      <div className="shadow rounded-lg overflow-hidden mb-4 w-full">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-black bg-amber-50"
          placeholder="Your password will appear here"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          className="outline-none bg-blue-700 text-white px-3 py-1 rounded"
          onClick={generatePassword}
        >
          Generate
        </button>
        <button
          className="outline-none bg-blue-700 text-white px-3 py-1 rounded"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>

      {/* Length Slider */}
      <div className="flex items-center gap-x-2 mb-4">
        <input
          type="range"
          min={6}
          max={30}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label className="text-white">Length: {length}</label>
      </div>

      {/* Symbol Option */}
      <div className="flex items-center gap-x-2 mb-2">
        <input
          type="checkbox"
          checked={isSymbolsAllowed}
          onChange={() => setSymbol((prev) => !prev)}
          id="isSymbols"
        />
        <label htmlFor="isSymbols" className="text-white">
          Include Symbols
        </label>
      </div>

      {/* Number Option */}
      <div className="flex items-center gap-x-2">
        <input
          type="checkbox"
          checked={isNumberAllowed}
          onChange={() => setNumber((prev) => !prev)}
          id="isNumber"
        />
        <label htmlFor="isNumber" className="text-white">
          Include Numbers
        </label>
      </div>
    </div>
  );
}

export default App;
