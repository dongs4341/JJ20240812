import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App";

// 이건 index.html에 있는 root를 말함
const container = document.getElementById("root");
const root = ReactDom.createRoot(container);

root.render(<App />);