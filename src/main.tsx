import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import GlobalStyle from "./GlobalStyle.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
);
