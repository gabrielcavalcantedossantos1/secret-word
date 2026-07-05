import { createBrowserRouter } from "react-router-dom";

import StartScreen from "../pages/StartScreen/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartScreen />,
  },
]);


export default router