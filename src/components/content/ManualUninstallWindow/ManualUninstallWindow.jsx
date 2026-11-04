import classNames from "classnames"
import { useState, useEffect } from "react";
import ContentFrame from "../../contentFrame/contentFrame"
import { useKnowledge } from "../../../utils/KnowledgeProvider";
import Window from '../../Window/Window'
import Box from '../../Box/Box';
import { InputWithButton, OptionsSwitch } from "../../components.import";
import { invoke } from '@tauri-apps/api/core';

export default function ManualUninstallWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {
    
    const pluginsKnowledge = useKnowledge();
    const knowledgeKnownApps = pluginsKnowledge.knowledge.knownApps;
    const knowledgeBasicPaths = pluginsKnowledge.knowledge.basicPaths
    const knowledgeUserPath = pluginsKnowledge.knowledge.userPath
    const userNameTest = "admin"
    const userSystem = pluginsKnowledge.userSystem
    const windowLink = "tab_manualuninstall";
    const isVisible = showAppWindow === windowLink;
    const [vstNameToDelete, setVstNameToDelete] = useState('')

    const defaultUninstallPathNames =  []
    Object.keys(knowledgeBasicPaths).map((path) => defaultUninstallPathNames.push(path))

    
    //useEffect(() => {
        //   if (showAppWindow === windowLink) {
            //       setBoxesVisible(true);
            //       window.boxElemTimer = 0
            //    } else {
                //        setBoxesVisible(false);
                //    }
                //}, [showAppWindow]);
                
                
                // if(selectedNavItem === 'Manual Uninstall') {
        // showAppWindow = true
        // setboxesVisible(true)
    // } else {
        // setboxesVisible(false)
    // }

    async function handleDelete() {
        
        for(let defaultUninstallPath of defaultUninstallPathNames) {
            let fileToDeleteCommon = knowledgeBasicPaths[defaultUninstallPath].path +  vstNameToDelete + knowledgeBasicPaths[defaultUninstallPath].extension
            let fileToDeleteUser = knowledgeUserPath+'/'+userNameTest+fileToDeleteCommon
            try{
                // delete files in common/ root folders
                let deletePluginInCommon = await invoke('delete_file', { path: fileToDeleteCommon});
                console.log('Delete in common: ',fileToDeleteCommon, deletePluginInCommon)

            }catch(e) {
                console.log(e)
            }
            try{
                let deletePluginInUser = await invoke('delete_file', { path: fileToDeleteUser});
                console.log('Delete in user: ',fileToDeleteUser, deletePluginInUser)

            }catch(e) {
                console.log(e)
            }
            console.log(defaultUninstallPath, knowledgeBasicPaths[defaultUninstallPath])
        }
    }

    const changeVstName = event => {
        console.log('Change Value, ',event.target.value)
        setVstNameToDelete(event.target.value)
    }

    return (
        <Window isVisible={isVisible}>
            <ContentFrame classes={'appWindow-manualUninstall-gridContainer'}>
                <Box classes={'box-manualUninstall-Input'} hiddenClass={'box-big--hidden'} trigger={isVisible} delay={1}>
                    <h1>Manual Uninstall</h1>
                    {/* <p>Enter the exact name of your VST/AU Plugin.</p> */}
                        {/* <InfoBox text={'To delete your PlugIns correctly, you have to enter the exact name or select one from the list.'}/> */}
                    <div className="flex inputData-container">
                        <InputWithButton id={'manualSearch'} classes={'input-size--large'} 
                            placeholder={'E.g: FabFilter Pro-Q 4'} 
                            isDatalist={true} datalistId={'knownPluginsDataList'} datalistItems={knowledgeKnownApps}
                            buttonId={'button_deleteManually'} buttonName={'Delete'} functionName={handleDelete}
                            onChange={changeVstName}
                        />
                    </div>
                </Box>
                <Box classes={'box-manualUninstall-options'} hiddenClass={'box-left--hidden'} trigger={isVisible} delay={2}>
                    <div className='option-container'>
                        <OptionsSwitch label={'Use default uninstall paths'} sublabel={defaultUninstallPathNames.toString()} type={'checkbox'} id={'check_useUninstallPathDefault'} name={'check_useUninstallPaths'}/>
                        <OptionsSwitch label={'Use app knowledge'} sublabel={'Related to '+ userSystem} type={'checkbox'} id={'checkbox_useUninstallAppKnowledge'} name={'check_useUninstallAppKnowledge'}/>
                        <OptionsSwitch label={'Remove DAW registry'} sublabel={'FLStudio, Cubebase'} type={'checkbox'} id={'checkbox_clearRegFromDAW'} name={'check_clearRegFromDAW'}/>
                    </div>
                </Box>
                <Box classes={'box-manualUninstall-actions'} hiddenClass={'box-left--hidden'} trigger={isVisible} delay={3}>
                    <div className='option-container'>
                        <OptionsSwitch label={'Use user paths'} type={'checkbox'} id={'check_useUninstallUserPath'} name={'check_useUninstallUserPaths'}/>
                    </div>
                </Box>
            </ContentFrame>
        </Window>
    );
}