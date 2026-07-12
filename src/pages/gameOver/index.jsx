import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

export default function GameOver() {
  const navigate = useNavigate();

  const { state } = useLocation();

  const score = state?.score || 0;
  const pickedWord = state?.pickedWord || "";

  function retry() {
    navigate("/game");
  }
  return (
    <div className="game-over">
      <h1>Você perdeu!</h1>
      <h4>
        A palavra era: <span>{pickedWord}</span>
      </h4>

      <h4>
        Pontuação: <span>{score} </span>
      </h4>
      <p>Deseja recomeçar?</p>
      <button onClick={retry}>Recomeçar</button>
    </div>
  );
}
