import ContentFrame from "../../contentFrame/contentFrame"
import classNames from "classnames"


export default function InstalledPluginsWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {

    if(selectedNavItem === 'Installed Plugins') {
        showAppWindow = true
    }
    return(
        <div className={classNames('appWindow',showAppWindow? '': 'dNone')}>
            <ContentFrame> Installed Plugin Window</ContentFrame>            
        </div>
    )
}