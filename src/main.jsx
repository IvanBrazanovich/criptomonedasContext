import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CriptoProvider from "./CriptoProvider/CriptoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CriptoProvider>
      <App />
    </CriptoProvider>
  </React.StrictMode>
);
