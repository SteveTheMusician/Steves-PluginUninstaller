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
import AppStorage from "./core/appStorage";

function App() {
  
  const [selectedNavItem, setSelectedNavItem] = useState('')
  const [showUninstallProgressWindow, setShowUninstallProgressWindow] = useState(false)

  useEffect(() => {
    let appStorageObj = AppStorage()
    setSelectedNavItem(appStorageObj.appConf.selectedTab)
  },[])
  
  console.log('-->', selectedNavItem)
  return (
    <KnowledgeProvider>
      <DialogProvider>
        <div id="app">
          {showUninstallProgressWindow ? <UninstallProgressWindow /> : null }
          <Nav selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} />
          <main>
            <InstalledPluginsWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowUninstallProgressWindow={setShowUninstallProgressWindow}/>
            <ManualUninstallWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowUninstallProgressWindow={setShowUninstallProgressWindow}/>
            <BrainWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowUninstallProgressWindow={setShowUninstallProgressWindow}/>
            <ConfigWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowUninstallProgressWindow={setShowUninstallProgressWindow}/>
          </main>
        </div>
      </DialogProvider>
    </KnowledgeProvider>
  );
}

export default App;
