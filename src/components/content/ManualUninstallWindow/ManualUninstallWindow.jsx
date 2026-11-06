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

export default function ManualUninstallWindow({selectedNavItem,setSelectedNavItem,setShowUninstallProgressWindow}) {
    
    const { openDialog } = useDialog();

    const pluginsKnowledge = useKnowledge();
    const knowledgeKnownApps = pluginsKnowledge.knowledge.knownApps;
    const knowledgeBasicPaths = pluginsKnowledge.knowledge.basicPaths
    const knowledgeUserPath = pluginsKnowledge.knowledge.userPath
    const userNameTest = "admin"
    const userSystem = pluginsKnowledge.userSystem
    const windowLink = "tab_manualuninstall";
    const isVisible = selectedNavItem === windowLink;
    const [vstNameToDelete, setVstNameToDelete] = useState('')
    // const [showUninstallWarnDialog, setShowUninstallWarnDialog] = useState(false)
    // const [startManualDelete, setStartManualDelete] = useState(false)
    const defaultUninstallPathNames =  []
    Object.keys(knowledgeBasicPaths).map((path) => defaultUninstallPathNames.push(path))


    
   const showDeleteWarning = () => {
        openDialog({
            dialogType: 'warnconfirm',
            dialogText: 'Delete this plugin?',
            dialogOkFunction: async () => {
              console.log('starting uninstall...');
              try{
                  let x = await Uninstaller('manualuninstall', setShowUninstallProgressWindow,pluginsKnowledge,vstNameToDelete);
                  console.log('Uninstaller response',x)
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
                            <Input type={'checkbox'} label={'VST'}/>
                            <Input type={'checkbox'} label={'VST3'}/>
                            <Input type={'checkbox'} label={'AU'}/>
                        </OptionsEmpty>
                        <OptionsSwitch label={'Root Paths'} sublabel={'/Library/Audio/'} type={'checkbox'} id={'check_useUninstallPathDefault'} name={'check_useUninstallPaths'}/>
                        <OptionsSwitch label={'User Paths'} sublabel={'/Users/admin/Library/Audio'} type={'checkbox'} id={'check_useUninstallPathUser'} name={'check_useUninstallPaths'}/>
                        <OptionsSwitch label={'Custom Paths'} sublabel={'Meine Pfade (anpassen)'} type={'checkbox'} id={'check_useUninstallUserPath'} name={'check_useUninstallCustomPaths'}/>
                        <OptionsSwitch label={'Clear DAW registry'} sublabel={'FLStudio, Cubebase'} type={'checkbox'} id={'checkbox_clearRegFromDAW'} name={'check_clearRegFromDAW'}/>
                    </div>
                </Box>
            </ContentFrame>
        </Window>
    );
}