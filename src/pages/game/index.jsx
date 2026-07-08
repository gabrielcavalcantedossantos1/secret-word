import { useNavigate } from "react-router-dom";
import { wordsList } from "../../data/words";

import "./style.css";

import { useEffect, useState } from "react";

export default function Game() {
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);

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
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
        <p>Você tem {guesses} tentativa(s).</p>
      </h3>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          ),
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar a palavra!</p>
        <form>
          <input type="text" name="letter" maxLength={1} required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        {wrongLetters.length > 0 && <p>Letras já digitadas:</p>}
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
}
