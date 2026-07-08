import { Outlet } from "react-router-dom";

import "./layout.css";

import github from "../../img/github-png.png";

export default function Layout() {
  return (
    <div className="container">
      <header>
        <a
          href="https://github.com/gabrielcavalcantedossantos1/secret-word"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github img" className="github-logo" />
        </a>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Palavra Secreta © 2026 - Desenvolvido por <span>Gabriel Cavalcante</span></p>
      </footer>
    </div>
  );
}
