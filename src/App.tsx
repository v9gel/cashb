import { App } from "konsta/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useOperatingSystem } from "@siberiacancode/reactuse";

export default function MyApp() {
  const operatingSystem = useOperatingSystem();

  return (
    <App
      theme={["ios", "macos"].includes(operatingSystem) ? "ios" : "material"}
      className="fixed"
    >
      <RouterProvider router={router} />
    </App>
  );
}
