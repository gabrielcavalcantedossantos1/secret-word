import { Outlet } from "react-router-dom";

import './layout.css'

export default function Layout() {
  return (
    <div className="container">
      <header>
        <h4>Bem vindo ao Game</h4>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Palavra Secreta © 2026 - Desenvolvido por Gabriel</p>
      </footer>
    </div>
  );
}
