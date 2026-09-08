import classNames from "classnames"
import ContentFrame from "../../contentFrame/contentFrame"

export default function ManualUninstallWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {
    
    if(selectedNavItem === 'Manual Uninstall') {
        showAppWindow = true
    }
    return(
         <div className={classNames('appWindow',showAppWindow? '': 'appWindow--hidden')}>
            <ContentFrame classes={'appWindow-manualUninstall-gridContainer'}>
                <div className="box box-manualUninstall-Input">
                    <p>Enter the exact name of the desired VST/AU Plugin here and klick on uninstall.</p>
                    <input type="text" list="knownPluginsDataList"></input>
                    <datalist id="knownPluginsDataList">
                        <option>Test</option>
                    </datalist>
                </div>
                <div className="box box-manualUninstall-options">

                </div>
                <div className="box box-manualUninstall-actions">

                </div>
            </ContentFrame>            
        </div>
    )
}