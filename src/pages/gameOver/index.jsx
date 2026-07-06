import { useNavigate } from "react-router-dom";
import "./style.css";

export default function GameOver() {
  const navigate = useNavigate();

  function retry() {
    navigate("/game");
  }
  return (
    <div>
      <button onClick={retry}>Recomeçar</button>
    </div>
  );
}
