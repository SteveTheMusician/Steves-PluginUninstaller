import ContentFrame from "../../contentFrame/contentFrame"
import classNames from "classnames"
import Window from '../../Window/Window'

export default function ConfigWindow({selectedNavItem,setSelectedNavItem}) {

    const windowLink = "tab_config"
    const isVisible = selectedNavItem === windowLink;
    
    return(
        <Window isVisible={isVisible}>
            <ContentFrame>Config</ContentFrame>            
        </Window>
    )
}