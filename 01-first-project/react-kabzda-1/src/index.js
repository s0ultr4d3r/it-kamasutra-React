import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: "1", message: "Hi, how are you?", likesCount: 0 },
  { id: "2", message: "It's my first post", likesCount: 23 },
];

let dialogs = [
  { id: 1, name: "First" },
  { id: 2, name: "Second" },
  { id: 3, name: "Third" },
  { id: 4, name: "Fourth" },
  { id: 5, name: "Fifth" },
];
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How" },
  { id: 3, message: "Yo" },
  { id: 4, message: "Hello" },
  { id: 5, message: "Good morning" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
