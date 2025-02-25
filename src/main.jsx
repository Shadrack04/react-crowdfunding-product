import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobalContext from "./context/GlobalContext.jsx";
import PlanContextProvider from "./context/plan-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContext>
      <PlanContextProvider>
        <App />
      </PlanContextProvider>
    </GlobalContext>
  </StrictMode>
);
