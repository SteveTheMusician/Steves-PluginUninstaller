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
  UninstallProgressWindow,
  StartWindow
} from "./components/content/content.import";
import DialogProvider from "./utils/DialogProvider";
import AppStorage from "./core/appStorage";

function App() {
  
  const [selectedNavItem, setSelectedNavItem] = useState('')
  const [showUninstallProgressWindow, setShowUninstallProgressWindow] = useState(false)
  const [appStorageObj, setAppStorageObj] = useState()
  const [showStartScreen, setShowStartScreen] = useState(false)

  useEffect( () => {
    async function loadStorage() {
      const appStorage = await AppStorage()
      setAppStorageObj(appStorage)
      setSelectedNavItem(appStorage.appConf.selectedTab)
      if(!appStorage.user.username) {
        setShowStartScreen(true)
      }
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
          {showStartScreen ? <StartWindow setShowStartScreen={setShowStartScreen}/> : 
            <>
              <Nav selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} />
              <main>
                <InstalledPluginsWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} 
                  setShowUninstallProgressWindow={setShowUninstallProgressWindow} 
                  appStorageObj={appStorageObj}
                />
                <ManualUninstallWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem}
                  setShowUninstallProgressWindow={setShowUninstallProgressWindow} appStorageObj={appStorageObj}
                />
                <BrainWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} 
                  setShowUninstallProgressWindow={setShowUninstallProgressWindow} appStorageObj={appStorageObj}
                />
                <ConfigWindow selectedNavItem={selectedNavItem} setSelectedNavItem={setSelectedNavItem} 
                  setShowUninstallProgressWindow={setShowUninstallProgressWindow} appStorageObj={appStorageObj}
                />
              </main>
            </>
          }
        </div>
      </DialogProvider>
    </KnowledgeProvider>
  );
}

export default App;
