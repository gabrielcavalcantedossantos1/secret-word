import { createBrowserRouter } from "react-router-dom";

import StartScreen from "../pages/StartScreen/index";
import Layout from "../components/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <StartScreen /> }],
  },
]);

export default router;
