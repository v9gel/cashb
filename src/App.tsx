import { App } from "konsta/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function MyApp() {
  return (
    <App theme="ios">
      <RouterProvider router={router} />
    </App>
  );
}
