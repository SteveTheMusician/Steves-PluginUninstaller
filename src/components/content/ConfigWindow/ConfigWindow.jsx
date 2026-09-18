import ContentFrame from "../../contentFrame/contentFrame"
import classNames from "classnames"
import Window from '../../Window/Window'

export default function ConfigWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {

    const windowLink = "tab_config"
    const isVisible = showAppWindow === windowLink;
    
    return(
        <Window isVisible={isVisible}>
            <ContentFrame>Config</ContentFrame>            
        </Window>
    )
}