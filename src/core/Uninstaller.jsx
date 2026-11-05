import { invoke } from '@tauri-apps/api/core';

export default async function Uninstaller(type,setShowUninstallProgressWindow,pluginsKnowledge,vstNameToDelete) {

    const knowledgeBasicPaths = pluginsKnowledge.knowledge.basicPaths
    const knowledgeKnownApps = pluginsKnowledge.knowledge.knownApps;
    const knowledgeUserPath = pluginsKnowledge.knowledge.userPath
    const userNameTest = "admin"
    const defaultUninstallPathNames =  []
    Object.keys(knowledgeBasicPaths).map((path) => defaultUninstallPathNames.push(path))
    
    console.log('data: ',pluginsKnowledge, 'uninstalltype: ',type)

    if(type === 'manualuninstall') {
        setShowUninstallProgressWindow(true)
        for(let defaultUninstallPath of defaultUninstallPathNames) {
            let fileToDeleteCommon = knowledgeBasicPaths[defaultUninstallPath].path +  vstNameToDelete + knowledgeBasicPaths[defaultUninstallPath].extension
            let fileToDeleteUser = knowledgeUserPath+userNameTest+fileToDeleteCommon
            try{
                // delete files in common/ root folders
                let deletePluginInCommon = await invoke('delete_file', { path: fileToDeleteCommon});
                console.log('Delete in common: ',fileToDeleteCommon, deletePluginInCommon)

            }catch(e) {
                return e
            }
            try{
                let deletePluginInUser = await invoke('delete_file', { path: fileToDeleteUser});
                console.log('Delete in user: ',fileToDeleteUser, deletePluginInUser)

            }catch(e) {
                return e
            }
        }
        setTimeout(function() {setShowUninstallProgressWindow(false)},500)
    }
}
