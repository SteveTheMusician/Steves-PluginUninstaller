import { default_selectedTab } from "./appDefaults"

const appStorageObj = {"inf":{"configVersion":"0.2"},"userConf":{"username":"UNKNOWN"}, "appConf":{"selectedTab":"","remove_pluginType":[],"check_publicFolder":""}}

export default function AppStorage() {
    let appMainStorage = localStorage.getItem('AppStorage')
    appMainStorage ? appMainStorage = JSON.parse(appMainStorage) : ''
    if(appMainStorage && appMainStorage.inf.configVersion === appStorageObj.inf.configVersion) {
        return appMainStorage
    }else {
        // rewrite app storage when version differs from default object or is empty
        appStorageObj.appConf.selectedTab = default_selectedTab
        localStorage.setItem('AppStorage',JSON.stringify(appStorageObj))
        return appStorageObj
    }
}

export function setAppStorageConf(key,value) {
    appStorageObj.appConf[key] = value
    localStorage.setItem('AppStorage',JSON.stringify(appStorageObj))
}