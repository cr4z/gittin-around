import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Chatbox } from "./components/Chatbox";

function App() {
  return (
    <div className="pointless-wrapper">
      <div className="App">
        <div className="top">gittin' around</div>
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
