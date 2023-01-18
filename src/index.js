import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./components/App/App";
import MainStyledWrapper from "./components/MainStyledWrapper/MainStyledWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainStyledWrapper>
      <App />
    </MainStyledWrapper>
  </React.StrictMode>
);
