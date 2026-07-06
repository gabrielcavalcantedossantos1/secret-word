import { useNavigate } from "react-router-dom";
import { wordsList } from "../../data/words";

import { useEffect, useState } from "react";

export default function Game() {
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  function pickWordAndCategory() {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    setPickedCategory(category);

    const word = words[category][Math.floor(Math.random() * words[category].length)];
    setPickedWord(word);
  }

  useEffect(() => {
    // escolher palavra e categoria
    pickWordAndCategory();
  }, []);

  const navigate = useNavigate();

  // verificando a letra do input
  function verifyLetter() {
    navigate("/end");
  }
  return (
    <div>
      <h1>game</h1>
      {pickedCategory} - {pickedWord}
      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  );
}
