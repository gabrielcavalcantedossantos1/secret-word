import { useNavigate } from "react-router-dom";
import { wordsList } from "../../data/words";

import "./style.css";

import { useEffect, useRef, useState } from "react";

export default function Game() {
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(5);
  const [score, setScore] = useState(0);

  const [letter, setLetter] = useState("");

  const letterInputRef = useRef(null);

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

  const navigate = useNavigate();

  useEffect(() => {
    pickWordAndCategory();
  }, []);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (
      letters.length > 0 &&
      uniqueLetters.every((letter) => guessedLetters.includes(letter))
    ) {
      // limpa os estados
      setGuessedLetters([]);
      setWrongLetters([]);

      // escolhe uma nova palavra
      pickWordAndCategory();

      // reinicia as tentativas
      setGuesses(5);
    }
  }, [guessedLetters, letters]);

  // verificando a letra do input
  function verifyLetter(letter) {
    const normalizedLetter = letter.toLowerCase();

    // checando se a letra já foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // incluir a letra na lista de letras corretas ou erradas
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((acc) => [...acc, normalizedLetter]);
      setScore((prevScore) => prevScore + 100);
    } else {
      setWrongLetters((acc) => [...acc, normalizedLetter]);

      setGuesses((prevGuesses) => prevGuesses - 1);
    }
  }

  // monitorando o estado de tentativas
  useEffect(() => {
    if (guesses <= 0) {
      navigate("/end", { state: { score, pickedWord } });

      // limpar todos os estados
      setGuessedLetters([]);
      setWrongLetters([]);
      setGuesses(5);
    }
  }, [guesses]);

  function handleSubmit(e) {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");
    letterInputRef.current.focus();
  }
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip">
        Sugestão: <span>{pickedCategory}</span>
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
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
