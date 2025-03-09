import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./input.css";
import TenderAppProvider from "./context/TenderAppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TenderAppProvider>
        <App />
      </TenderAppProvider>
    </BrowserRouter>
  </React.StrictMode>

);

