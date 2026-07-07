import { useNavigate } from "react-router-dom";
import { wordsList } from "../../data/words";

import "./style.css";

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
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar a palavra!</p>
        <form>
          <input type="text" name="letter" maxLength={1} required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já digitadas:</p>
        <span>a, </span>
        <span>b</span>
      </div>
    </div>
  );
}
