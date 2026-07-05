import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
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
