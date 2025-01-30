import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.tsx";
import { VisiProvider } from "./components/context/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <VisiProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </VisiProvider>
);
