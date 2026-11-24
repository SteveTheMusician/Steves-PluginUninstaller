import { invoke } from '@tauri-apps/api/core';
import AppStorage from './appStorage';

export default async function Uninstaller(type,setShowUninstallProgressWindow,pluginsKnowledge,vstNameToDelete,appStorageObj) {
    const knowledgePublicPaths = pluginsKnowledge.knowledge.defaultPaths.public
    const defaultUninstallPathNames =  []
    Object.keys(knowledgePublicPaths).map((path) => defaultUninstallPathNames.push(path))

    setShowUninstallProgressWindow(true)

    if(type === 'manualuninstall') {
        let uninstallArray = await createUninstallObject(pluginsKnowledge.knowledge,appStorageObj,vstNameToDelete,'manualuninstall')
        for(let uninstallPath of uninstallArray) {
            try{
                // delete executor
                console.log('➡️ Send uninstall path: ',uninstallPath)
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
    knowledgeUserPath = knowledgeUserPath.replace('{user}',appStorageObj.user.username)
    const removePluginTypes = appStorageObj.appConf.remove_pluginType
    removePluginTypes.forEach(vstname => {
        let vstFolder = pluginsKnowledge.plugIns[vstname].folder
        let vstExtension = pluginsKnowledge.plugIns[vstname].extension
        uninstallArray.push(knowledgePublicPath+vstFolder+vstNameToDelete+vstExtension)
        uninstallArray.push(knowledgeUserPath+vstFolder+vstNameToDelete+vstExtension)
    });
    return uninstallArray    

}
