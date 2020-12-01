import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Chatbox } from "./components/Chatbox";

function App() {
  return (
    <div className="App">
      <div className="top">gittin' around</div>
      <Chatbox />
      <span>That's the chatbox! ^</span>
    </div>
  );
}

export default App;
