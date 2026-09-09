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
                    <div className="flex inputData-container">
                        <input type="text" className="inputData input-size--large" list="knownPluginsDataList" placeholder="Bsp: FabFilter Pro-Q 4"></input>
                        <datalist id="knownPluginsDataList">
                            <option>Test</option>
                        </datalist>
                    </div>
                </div>
                <div className="box box-manualUninstall-options">

                </div>
                <div className="box box-manualUninstall-actions">

                </div>
            </ContentFrame>            
        </div>
    )
}