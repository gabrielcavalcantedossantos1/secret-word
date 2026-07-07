import { useNavigate } from "react-router-dom";
import { wordsList } from "../../data/words";

import { useEffect, useState } from "react";

export default function Game() {
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  function pickWordAndCategory() {
    // escolher categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // escolher palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    // criar array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // tirando as funções de setState do return, para não dar erro de renderização
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
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

      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  );
}
