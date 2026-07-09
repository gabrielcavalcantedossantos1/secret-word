import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";

export default function GameOver() {
  const navigate = useNavigate();

  const {state} = useLocation();

  const score = state?.score || 0;
  const pickedWord = state?.pickedWord || "";

  function retry() {
    navigate("/game");

    
  }
  return (
    <div>
      <button onClick={retry}>Recomeçar</button>
    </div>
  );
}
