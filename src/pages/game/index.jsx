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
  }

  useEffect(() => {
    // escolher palavra e categoria
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
