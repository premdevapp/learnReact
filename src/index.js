import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { HelloMess, Timer, TodoApp, MarkdownEditor, Simple } from "./App";
import reportWebVitals from "./reportWebVitals";
/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
 */

/* ReactDOM.render(
  <HelloMess name="Taylor" />,
  document.getElementById("hello-example")
);
 */

/* ReactDOM.render(<Timer />, document.getElementById("hello-example"));
 */

/* ReactDOM.render(<TodoApp />, document.getElementById("hello-example"));
 */

/* 

ReactDOM.render(<MarkdownEditor />, document.getElementById("hello-example"));

 */

/* 
ReactDOM.render(<Simple />, document.getElementById("hello-example"));
 */

ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
