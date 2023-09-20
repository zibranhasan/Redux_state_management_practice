import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
