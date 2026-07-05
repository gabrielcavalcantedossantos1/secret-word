// CSS
import "./App.css";

// react
import { useCallback, useEffect, useState } from "react";

// dados
import { wordsList } from "./data/words";

// components
import StartScreen from "./components/StartScreen";

const stage = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

export default function App() {

  
  return (
    <div className="App">
      <StartScreen />
    </div>
  );
}
