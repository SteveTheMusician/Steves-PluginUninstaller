import ContentFrame from "../../contentFrame/contentFrame"
import classNames from "classnames"
import Window from '../../Window/Window'

export default function BrainWindow({selectedNavItem,setSelectedNavItem,showAppWindow}) {

    const windowLink = "tab_brain"
    const isVisible = showAppWindow === windowLink;
    
    return(
        <Window isVisible={isVisible}>
            <ContentFrame>Apps Brain</ContentFrame>            
        </Window>
    )
}