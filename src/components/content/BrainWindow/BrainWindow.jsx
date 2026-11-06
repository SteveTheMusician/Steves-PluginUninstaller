import ContentFrame from "../../contentFrame/contentFrame"
import classNames from "classnames"
import Window from '../../Window/Window'

export default function BrainWindow({selectedNavItem,setSelectedNavItem}) {

    const windowLink = "tab_brain"
    const isVisible = selectedNavItem === windowLink;
    
    return(
        <Window isVisible={isVisible}>
            <ContentFrame>Apps Brain</ContentFrame>            
        </Window>
    )
}