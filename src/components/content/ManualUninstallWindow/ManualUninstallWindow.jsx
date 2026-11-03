import classNames from "classnames"
import { useState, useEffect } from "react";
import ContentFrame from "../../contentFrame/contentFrame"
import { useKnowledge } from "../../../utils/KnowledgeProvider";
import Window from '../../Window/Window'
import Box from '../../Box/Box';
import { Button, Input, Switch, InputWithButton, InfoBox } from "../../molecules/molecules.import";
import Icon from "../../Icon/Icon";

export default function ManualUninstallWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {
    
    const pluginsKnowledge = useKnowledge();
    const knowledgeKnownApps = pluginsKnowledge.knownApps;
    const windowLink = "tab_manualuninstall";
    const isVisible = showAppWindow === windowLink;

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
                            buttonId={'button_deleteManually'} buttonName={'Delete'}
                        />
                    </div>
                </Box>
                <Box classes={'box-manualUninstall-options'} hiddenClass={'box-left--hidden'} trigger={isVisible} delay={2}>
                    <div classname='optionRow'>
                            <p>Eine Option</p>
                        <Switch type={'checkbox'} id={'radio_useUninstallPathDefault'} name={'radio_useUninstallPaths'} > Use default paths</Switch>
                    </div>
                </Box>
                <Box classes={'box-manualUninstall-actions'} hiddenClass={'box-left--hidden'} trigger={isVisible} delay={3}>
                    Test
                </Box>
            </ContentFrame>
        </Window>
    );
}