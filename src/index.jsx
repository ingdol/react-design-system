import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/style.scss";
import { WebRoutes } from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WebRoutes />
  </React.StrictMode>
);
