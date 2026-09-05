import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./style/App.css";
import Nav from "./components/Nav/Nav"
import ContentFrame from "./components/contentFrame/contentFrame";

function App() {
  return (
    <div id="app">
      <Nav />
        <main>
          <ContentFrame frameName="test"/>
        </main>
    </div> 
  );
}

export default App;
