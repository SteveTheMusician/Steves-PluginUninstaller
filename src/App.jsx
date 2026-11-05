import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./style/App.css";
import KnowledgeProvider from './utils/KnowledgeProvider'
import Nav from "./components/Nav/Nav"
import { 
  InstalledPluginsWindow, 
  ManualUninstallWindow,
  BrainWindow,
  ConfigWindow,
  UninstallProgressWindow
} from "./components/content/content.import";
import DialogProvider from "./utils/DialogProvider";

function App() {

  const [selectedNavItem, setSelectedNavItem] = useState("Installed Plugins")
  const [showAppWindow, setShowAppWindow] = useState()
  const [showUninstallProgressWindow, setShowUninstallProgressWindow] = useState(false)

  return (
    <KnowledgeProvider>
      <DialogProvider>
        <div id="app">
          {showUninstallProgressWindow ? <UninstallProgressWindow /> : null }
          <Nav selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowAppWindow={setShowAppWindow}/>
          <main>
            <InstalledPluginsWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow} setShowUninstallProgressWindow={setShowUninstallProgressWindow}/>
            <ManualUninstallWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow} setShowUninstallProgressWindow={setShowUninstallProgressWindow}/>
            <BrainWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow} setShowUninstallProgressWindow={setShowUninstallProgressWindow}/>
            <ConfigWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} showAppWindow={showAppWindow} setShowAppWindow={setShowAppWindow} setShowUninstallProgressWindow={setShowUninstallProgressWindow}/>
          </main>
        </div>
      </DialogProvider>
    </KnowledgeProvider>
  );
}

export default App;
