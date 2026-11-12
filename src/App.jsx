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
  const [appStorageObj, setAppStorageObj] = useState()

  useEffect( () => {
    async function loadStorage() {
      let appStorage = await AppStorage()
      console.log('appstorage app', appStorage)
      setAppStorageObj(appStorage)
      setSelectedNavItem(appStorage.appConf.selectedTab)
    }
    if(!appStorageObj) {
      loadStorage()
    }
  },[])
  
  return (
    <KnowledgeProvider>
      <DialogProvider>
        <div id="app">
          {showUninstallProgressWindow ? <UninstallProgressWindow /> : null }
          <Nav selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} />
          <main>
            <InstalledPluginsWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowUninstallProgressWindow={setShowUninstallProgressWindow} appStorageObj={appStorageObj}/>
            <ManualUninstallWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowUninstallProgressWindow={setShowUninstallProgressWindow} appStorageObj={appStorageObj}/>
            <BrainWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowUninstallProgressWindow={setShowUninstallProgressWindow} appStorageObj={appStorageObj}/>
            <ConfigWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} setShowUninstallProgressWindow={setShowUninstallProgressWindow} appStorageObj={appStorageObj}/>
          </main>
        </div>
      </DialogProvider>
    </KnowledgeProvider>
  );
}

export default App;
