import { default_selectedTab, appDefaultStorageObj } from "./appDefaults"
import { useKnowledgeNoProvider } from "../utils/KnowledgeProvider"

export function setAppStorage(conf,key,value) {
    let appStorage = localStorage.getItem('AppStorage')
    appStorage = JSON.parse(appStorage) ?? appDefaultStorageObj
    appStorage[conf][key] = value
    localStorage.setItem('AppStorage',JSON.stringify(appStorage))
}

export default async function AppStorage() {
    let appStorage = localStorage.getItem('AppStorage')
    appStorage = JSON.parse(appStorage) ?? ''
    if(appStorage && appStorage.inf.configVersion === appDefaultStorageObj.inf.configVersion) {
        return appStorage
    }else {
        try {
            const knowledge = await useKnowledgeNoProvider()
            const knowledgePlugins = knowledge.plugIns
            let defaultStorageRemovePluginTypeArr = []
            Object.keys(knowledgePlugins).forEach((vstName) => {
                console.log('k',knowledgePlugins[vstName].defaultChecked)
                if(knowledgePlugins[vstName].defaultChecked) {
                    defaultStorageRemovePluginTypeArr.push(vstName)
                }
            })
            // rewrite app storage when version differs from default object or is empty
            appDefaultStorageObj.appConf.remove_pluginType = defaultStorageRemovePluginTypeArr
            appDefaultStorageObj.appConf.selectedTab = default_selectedTab
            localStorage.setItem('AppStorage',JSON.stringify(appDefaultStorageObj))
        } catch(e) {
            return e
        }
        return appDefaultStorageObj
    }
}

export function appStorageDefaults() {
}