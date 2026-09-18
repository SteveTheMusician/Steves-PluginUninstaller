import ContentFrame from "../../contentFrame/contentFrame"
import classNames from "classnames"
import useState from 'react'
import Window from '../../Window/Window'


export default function InstalledPluginsWindow({selectedNavItem,setSelectedNavItem,showAppWindow,}) {

    const windowLink = "tab_installedplugins"
    const isVisible = showAppWindow === windowLink;

    return(
        <Window isVisible={isVisible}>
            <ContentFrame> Installed Plugin Window</ContentFrame>            
        </Window>
    )
}