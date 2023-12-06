import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import WorldMap from "./WorldMap";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WorldMap />
  </React.StrictMode>,
);
