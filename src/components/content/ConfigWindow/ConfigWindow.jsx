import ContentFrame from "../../contentFrame/contentFrame"
import classNames from "classnames"

export default function ConfigWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {

    if(selectedNavItem === 'Config') {
        showAppWindow = true
    }
    return(
        <div className={classNames('appWindow',showAppWindow? '': 'appWindow--hidden')}>
            <ContentFrame>Config</ContentFrame>            
        </div>
    )
}