import classNames from "classnames"
import ContentFrame from "../../contentFrame/contentFrame"

export default function ManualUninstallWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {
    
    if(selectedNavItem === 'Manual Uninstall') {
        showAppWindow = true
    }
    return(
         <div className={classNames('appWindow',showAppWindow? '': 'appWindow--hidden')}>
            <ContentFrame> Manual Uninstall Window</ContentFrame>            
        </div>
    )
}