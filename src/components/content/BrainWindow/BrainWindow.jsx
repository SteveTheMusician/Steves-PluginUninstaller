import ContentFrame from "../../contentFrame/contentFrame"
import classNames from "classnames"

export default function BrainWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {

    if(selectedNavItem === 'Brain') {
        showAppWindow = true
    }
    return(
        <div className={classNames('appWindow',showAppWindow? '': 'appWindow--hidden')}>
            <ContentFrame>Brain</ContentFrame>            
        </div>
    )
}