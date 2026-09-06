import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./style/App.css";
import Nav from "./components/Nav/Nav"
import InstalledPluginsWindow from "./components/content/InstalledPluginsWindow/InstalledPluginsWindow";
import ManualUninstallWindow from "./components/content/ManualUninstallWindow/ManualUninstallWindow";
import BrainWindow from "./components/content/BrainWindow/BrainWindow";
import ConfigWindow from "./components/content/ConfigWindow/ConfigWindow";

function App() {

  const [selectedNavItem, setSelectedNavItem] = useState("Installed Plugins")
  const [showAppWindow, setShowAppWindow] = useState()

  return (
    <div id="app">
      <Nav selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem}/>
        <main>
        <InstalledPluginsWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow}/>
        <ManualUninstallWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow}/>
        <BrainWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow}/>
        <ConfigWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow}/>
        </main>
    </div> 
  );
}

export default App;
