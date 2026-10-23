import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./style/App.css";
import KnowledgeProvider from './utils/KnowledgeProvider'
import Nav from "./components/Nav/Nav"
import { 
  InstalledPluginsWindow, 
  ManualUninstallWindow,
  BrainWindow,
  ConfigWindow
} from "./components/content/content.import";

function App() {

  const [selectedNavItem, setSelectedNavItem] = useState("Installed Plugins")
  const [showAppWindow, setShowAppWindow] = useState()

  return (
    <KnowledgeProvider>
      <div id="app">
        <Nav selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowAppWindow={setShowAppWindow}/>
        <main>
          <InstalledPluginsWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow} />
          <ManualUninstallWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow} />
          <BrainWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow} />
          <ConfigWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow} />
        </main>
      </div>
    </KnowledgeProvider>
  );
}

export default App;
