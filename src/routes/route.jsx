import { createBrowserRouter } from "react-router-dom";

import StartScreen from "../pages/StartScreen/index";
import Layout from "../components/layout/layout";
import Game from "../pages/game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <StartScreen /> },
      { path: "/game", element: <Game /> },
    ],
  },
]);

export default router;
