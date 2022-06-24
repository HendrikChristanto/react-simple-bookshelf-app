import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ToastContextProvider } from "./context/ToastContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ToastContextProvider>
      <App />
    </ToastContextProvider>
  </StrictMode>
);
