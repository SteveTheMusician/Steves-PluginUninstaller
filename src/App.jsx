import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./style/App.css";
import Nav from "./components/nav/Nav"

function App() {
  return (
    <div id="app">
      <Nav />
        <main>
        </main>
    </div> 
  );
}

export default App;
