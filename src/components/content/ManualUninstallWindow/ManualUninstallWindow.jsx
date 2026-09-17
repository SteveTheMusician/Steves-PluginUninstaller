import classNames from "classnames"
import ContentFrame from "../../contentFrame/contentFrame"
import { useKnowledge } from "../../../utils/KnowledgeProvider";
import Box from '../../Box/Box';

export default function ManualUninstallWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {
    
    const pluginsKnowledge = useKnowledge()
    const knowledgeKnownApps = pluginsKnowledge.knownApps

    if(selectedNavItem === 'Manual Uninstall') {
        showAppWindow = true
        window.boxElemTimer = '0'
    }

    return (
        <div className={classNames('appWindow', showAppWindow ? '' : 'dNone')}>
            <ContentFrame classes={'appWindow-manualUninstall-gridContainer'}>
                <Box classes={'box-manualUninstall-Input'}>
                    <p>Enter the exact name of the desired VST/AU Plugin here and click on uninstall.</p>
                    <div className="flex inputData-container">
                        <input type="text" className="inputData input-size--large"
                               list="knownPluginsDataList"
                               placeholder="Bsp: FabFilter Pro-Q 4" />
                        <datalist id="knownPluginsDataList">
                            {Object.keys(knowledgeKnownApps).map((appName) => (
                                <option key={appName} value={appName}>
                                    {appName}
                                </option>
                            ))}
                        </datalist>
                    </div>
                </Box>
                <Box classes={'box-manualUninstall-options'}>

                </Box>
                <Box classes={'box-manualUninstall-actions'}>

                </Box>
            </ContentFrame>
        </div>
    );
}