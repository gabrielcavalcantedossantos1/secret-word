import { useNavigate } from "react-router-dom";
import "./style.css";

export default function StartScreen() {
  const navigate = useNavigate();
  return (
    <div className="start">
      <h1>Palavra Secreta</h1>

      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={() => navigate("/game")}>Começar o jogo</button>
    </div>
  );
}
