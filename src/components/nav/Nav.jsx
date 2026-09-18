
import { useState } from "react";
import Tab from "../Tab/Tab";

export default function Nav({selectedNavItem,setSelectedNavItem,setShowAppWindow}) {

    const tabButtonArray = [{key: "tab_installedplugins", label:"Installed Plugins",icon:"",onlyIcon:false, noBackground:false}, 
        {key: "tab_manualuninstall", label:"Manual Uninstall",icon:"",onlyIcon:false,noBackground:false}, 
        {key: "tab_brain", label:"Brain",icon:"",onlyIcon:false,noBackground:false}
    ];
    const tabButtonArrayConfigs = [{key: "tab_config",label:"Config",icon:"config",onlyIcon:true,noBackground:true}
    ];
    //const [activeTab, setActiveTab] = useState("Installed Plugins");

    return(
    <nav className="dFlex">
        {/* <div className="logo-container flex"> */}
            {/* <img src="/tauri.svg" className="appLogo" alt="App Logo" /> */}
        {/* </div> */}
        <div className="navTabs-container dFlex">
           {tabButtonArray.map((item) => (
                <Tab key={item.key} isActive={selectedNavItem === item.key}  icon={item.icon} onlyIcon={item.onlyIcon} noBackground={item.noBackground} onClick={() => {setSelectedNavItem(item.key); setShowAppWindow(item.key)}}>
                    {item.label}
                </Tab>
            ))}
        </div>
        <div className="navConfig-container flex">
            {tabButtonArrayConfigs.map((item) => (
                <Tab key={item.key} isActive={selectedNavItem === item.key}  icon={item.icon} onlyIcon={item.onlyIcon} noBackground={item.noBackground} onClick={() => {setSelectedNavItem(item.key); setShowAppWindow(item.key)}}>
                    {item.label}
                </Tab>
            ))}
        </div>
    </nav>
    );
};