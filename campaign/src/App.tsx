import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCounter } from "@shared/hooks/useCounter";
import { MyComponent } from "@shared//MyComponent";

function App() {
  const [count, setCount] = useState(0);
  const counter = useCounter();

  return (
    <div className="App ">
      <header className="bg-green-900 flex flex-col items-center text-white justify-center text-3xl min-h-screen">
        <img src={logo} className="h-12" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates. {counter}
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs!!!!!!
          </a>
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
