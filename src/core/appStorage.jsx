import { default_selectedTab } from "./appDefaults"

const appStorageObj = {"userConf":{"test":"test"}, "appConf":{"selectedTab":""}}

export default function AppStorage() {
    let appMainStorage = localStorage.getItem('AppStorage')
    console.log('Appstorage Started')
    if(appMainStorage) {
        return appMainStorage = JSON.parse(appMainStorage)
    }else {
        appStorageObj.appConf.selectedTab = default_selectedTab
        localStorage.setItem('AppStorage',JSON.stringify(appStorageObj))
        return appStorageObj
    }
}

export function setAppStorageConf(key,value) {
    appStorageObj.appConf[key] = value
    localStorage.setItem('AppStorage',JSON.stringify(appStorageObj))
}