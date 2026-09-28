import classNames from "classnames"
import { useState, useEffect } from "react";
import ContentFrame from "../../contentFrame/contentFrame"
import { useKnowledge } from "../../../utils/KnowledgeProvider";
import Window from '../../Window/Window'
import Box from '../../Box/Box';
import Input from "../../molecules/input/Input";

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
                    <p>Enter the exact name of the desired VST/AU Plugin here and click on uninstall.</p>
                    <div className="flex inputData-container">
                        <Input type={'text'} id={'manualSearch'} classes={'input-size--large'}
                            placeholder={'Bsp: FabFilter Pro-Q 4'} 
                            isDatalist={true} datalistId={'knownPluginsDataList'} datalistItems={knowledgeKnownApps} 
                        />
                    </div>
                </Box>
                <Box classes={'box-manualUninstall-options'} hiddenClass={'box-left--hidden'} trigger={isVisible} delay={2}>

                </Box>
                <Box classes={'box-manualUninstall-actions'} hiddenClass={'box-left--hidden'} trigger={isVisible} delay={3}>

                </Box>
            </ContentFrame>
        </Window>
    );
}