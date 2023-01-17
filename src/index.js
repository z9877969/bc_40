import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

const container = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Index"),
  React.createElement(
    "ul",
    { style: { listStyle: "none" } },
    React.createElement("li", null, "1"),
    React.createElement("li", null, "2"),
    React.createElement("li", null, "3")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
