import { invoke } from '@tauri-apps/api/core';
import AppStorage from './appStorage';

const userNameTest = "admin"
export default async function Uninstaller(type,setShowUninstallProgressWindow,pluginsKnowledge,vstNameToDelete) {
    const appStorageObj = AppStorage()
    const knowledgePublicPaths = pluginsKnowledge.knowledge.defaultPaths.public
    const knowledgeUserPath = pluginsKnowledge.knowledge.defaultPaths.user
    const knowledgeKnownApps = pluginsKnowledge.knowledge.knownApps;
    const lStorage_removePluginTypes = appStorageObj.appConf.remove_pluginType
    //Mok User name
    
    const defaultUninstallPathNames =  []
    Object.keys(knowledgePublicPaths).map((path) => defaultUninstallPathNames.push(path))
    
    console.log('data: ',pluginsKnowledge, 'uninstalltype: ',type)
    setShowUninstallProgressWindow(true)

    if(type === 'manualuninstall') {
        let uninstallArray = await createUninstallObject(pluginsKnowledge.knowledge,appStorageObj,vstNameToDelete,'manualuninstall')
        for(let uninstallPath of uninstallArray) {
            // let fileToDeleteCommon = knowledgePublicPaths[defaultPaths].user +  vstNameToDelete + knowledgePublicPaths[defaultUninstallPath].extension
            // let fileToDeleteUser = knowledgeUserPath+userNameTest+fileToDeleteCommon
            try{
                // delete executor
                let deletePluginInCommon = await invoke('delete_file', { path: uninstallPath});
                console.log('Delete Executor: ',uninstallPath, deletePluginInCommon)

            }catch(e) {
                return e
            }
        }
        setTimeout(function() {setShowUninstallProgressWindow(false)},500)
    }
}

async function createUninstallObject(pluginsKnowledge,appStorageObj,vstNameToDelete,type){
    let uninstallArray = []
    const knowledgePublicPath = pluginsKnowledge.defaultPaths.public
    let knowledgeUserPath = pluginsKnowledge.defaultPaths.user
    knowledgeUserPath = knowledgeUserPath.replace('{user}',userNameTest)
    const lstorage_removePluginNames = appStorageObj.appConf.remove_pluginType
    lstorage_removePluginNames.forEach(vstname => {
        let vstFolder = pluginsKnowledge.plugIns[vstname].folder
        let vstExtension = pluginsKnowledge.plugIns[vstname].extension
        uninstallArray.push(knowledgePublicPath+vstFolder+vstNameToDelete+vstExtension)
        uninstallArray.push(knowledgeUserPath+vstFolder+vstNameToDelete+vstExtension)

        
    });
    return uninstallArray    

}
