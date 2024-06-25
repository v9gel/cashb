import { createHashRouter } from "react-router-dom";
import { Main } from "./main";

export const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
