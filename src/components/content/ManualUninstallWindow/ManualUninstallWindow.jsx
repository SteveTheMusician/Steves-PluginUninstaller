import classNames from "classnames"
import { useState, useEffect } from "react";
import ContentFrame from "../../contentFrame/contentFrame"
import { useKnowledge } from "../../../utils/KnowledgeProvider";
import Window from '../../Window/Window'
import Box from '../../Box/Box';
import { InputWithButton, OptionsSwitch, OptionsEmpty } from "../../components.import";
import { Switch, Select, Input } from "../../molecules/molecules.import";
import { useDialog } from "../../../utils/DialogProvider";
import Uninstaller from "../../../core/Uninstaller";
import { setAppStorage } from "../../../core/appStorage";
import AppStorage from "../../../core/appStorage";

export default function ManualUninstallWindow({selectedNavItem,setSelectedNavItem,setShowUninstallProgressWindow,appStorageObj}) {
    
    const { openDialog } = useDialog();
    // const appStorageObj = appStorageObj
    const pluginsKnowledge = useKnowledge();
    const knowledgeKnownApps = pluginsKnowledge.knowledge.knownApps;
    const knowledgeVstPlugins = pluginsKnowledge.knowledge.plugIns
    const knowledgeDefaultPaths = pluginsKnowledge.knowledge.defaultPaths
    const userSystem = pluginsKnowledge.userSystem
    const windowLink = "tab_manualuninstall";
    const isVisible = selectedNavItem === windowLink;
    const [vstNameToDelete, setVstNameToDelete] = useState('')
    // const [showUninstallWarnDialog, setShowUninstallWarnDialog] = useState(false)
    // const [startManualDelete, setStartManualDelete] = useState(false)
    const defaultUninstallPathNames =  []
    Object.keys(knowledgeVstPlugins).map((vst) => {
        defaultUninstallPathNames.push(vst)
    })
    const storage_uninstallVSTName = appStorageObj.appConf.remove_pluginType

   const showDeleteWarning = () => {
        openDialog({
            dialogType: 'warnconfirm',
            dialogText: 'Delete this plugin?',
            dialogOkFunction: async () => {
              console.log('🏁 starting uninstall...');
              console.log('📀 uninstall data:', pluginsKnowledge, vstNameToDelete, storage_uninstallVSTName)
              try{
                await Uninstaller('manualuninstall', setShowUninstallProgressWindow,pluginsKnowledge,vstNameToDelete, appStorageObj);
              }catch(e){
                console.log(e)
              }
            },
            dialogAboardFunction: () => {
              console.log('aborted');
            },
            dialogButtonTextWarnConfirm: 'Uninstall',
            dialogButtonTextWarnConfirmAboard: 'Cancel'
        });
    };



    const changeVstName = event => {
        setVstNameToDelete(event.target.value)
    }

    const changeVstFileCheck = event => {
        let checkBoxvalue = event.target.value
        if(event.target.checked) {
            storage_uninstallVSTName.push(checkBoxvalue)
            setAppStorage('appConf','remove_pluginType',storage_uninstallVSTName)
        } else {
            const uninstallExtArrayIndex = storage_uninstallVSTName.indexOf(checkBoxvalue)
            storage_uninstallVSTName.splice(uninstallExtArrayIndex, 1)
            setAppStorage('appConf','remove_pluginType',storage_uninstallVSTName)
        }
        
    }

    return (
        <Window isVisible={isVisible}>

            
            <ContentFrame classes={'appWindow-manualUninstall-gridContainer'}>
                <Box classes={'box-manualUninstall-Input'} hiddenClass={'box-big--hidden'} trigger={isVisible} delay={1}>
                    <h1>Manual Uninstall</h1>
                    {/* <p>Enter the exact name of your VST/AU Plugin.</p> */}
                        {/* <InfoBox text={'To delete your PlugIns correctly, you have to enter the exact name or select one from the list.'}/> */}
                    <div className="flex inputData-container">
                        <InputWithButton id={'manualSearch'} classes={'inputData input-size--large'} 
                            placeholder={'E.g: FabFilter Pro-Q 4'} 
                            isDatalist={true} datalistId={'knownPluginsDataList'} datalistItems={knowledgeKnownApps}
                            buttonId={'button_deleteManually'} buttonName={'Delete'} functionName={showDeleteWarning}
                            onChange={changeVstName}
                        />
                    </div>
                </Box>
                <Box classes={'box-manualUninstall-options'} hiddenClass={'box-left--hidden'} trigger={isVisible} delay={2}>
                    <div className='option-container'>
                        <div className="options-headlineContainer dFlex">
                            <h3>General</h3>
                        </div>
                        <OptionsSwitch label={'Use app knowledge'} sublabel={'Related to '+ userSystem} type={'checkbox'} id={'checkbox_useUninstallAppKnowledge'} name={'check_useUninstallAppKnowledge'}/>
                    </div>
                </Box>
                <Box classes={'box-manualUninstall-actions'} hiddenClass={'box-left--hidden'} trigger={isVisible} delay={3}>
                    <div className='option-container'>
                        <div className="options-headlineContainer dFlex">
                            <h3>Remove</h3>
                        </div>
                        <OptionsEmpty label={'PlugIn File-Types'} sublabel={'Select which file types you want to remove, based on your OS'} classes={'Options-Container-Checks'}>
                            {
                                defaultUninstallPathNames.map((VSTName) => {
                                    // let vstExt = knowledgeVstPlugins[VSTName].extension
                                    return <Input key={VSTName} type={'checkbox'} checked={''} checkedState={storage_uninstallVSTName} label={VSTName} value={VSTName} name={'check_removePluginType'} onChange={changeVstFileCheck}/>
                                })
                           
                            }
                        </OptionsEmpty>
                        <OptionsSwitch label={'In Public Folder'} sublabel={knowledgeDefaultPaths.public} type={'checkbox'} id={'check_useUninstallPathDefault'} name={'check_useUninstallPaths'}/>
                        <OptionsSwitch label={'In User Folder'} sublabel={'/Users/admin/Library/Audio'} type={'checkbox'} id={'check_useUninstallPathUser'} name={'check_useUninstallPaths'}/>
                        <OptionsSwitch label={'Custom Paths'} sublabel={'Meine Pfade (anpassen)'} type={'checkbox'} id={'check_useUninstallUserPath'} name={'check_useUninstallCustomPaths'}/>
                        <OptionsSwitch label={'Clear DAW registry'} sublabel={'FLStudio, Cubebase'} type={'checkbox'} id={'checkbox_clearRegFromDAW'} name={'check_clearRegFromDAW'}/>
                    </div>
                </Box>
            </ContentFrame>
        </Window>
    );
}