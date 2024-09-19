import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import './styles/app.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.js'
import 'aos/dist/aos.css'
import { BrowserRouter } from "react-router-dom";
import AppState from "./context/AppState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppState>
        <App />
      </AppState>
    </BrowserRouter>
  </StrictMode>
);
