
import { useState } from "react";
import Tab from "../Tab/Tab";

export default function Nav({selectedNavItem,setSelectedNavItem}) {

    const tabButtonArray = [{label:"Installed Plugins",icon:"",onlyIcon:false, noBackground:false}, 
        {label:"Manual Uninstall",icon:"",onlyIcon:false,noBackground:false}, 
        {label:"Brain",icon:"",onlyIcon:false,noBackground:false}
    ];
    const tabButtonArrayConfigs = [{label:"Config",icon:"config",onlyIcon:true,noBackground:true}
    ];
    //const [activeTab, setActiveTab] = useState("Installed Plugins");

    return(
    <nav className="dFlex">
        {/* <div className="logo-container flex"> */}
            {/* <img src="/tauri.svg" className="appLogo" alt="App Logo" /> */}
        {/* </div> */}
        <div className="navTabs-container dFlex">
           {tabButtonArray.map((item) => (
                <Tab key={item.label} isActive={selectedNavItem === item.label}  icon={item.icon} onlyIcon={item.onlyIcon} noBackground={item.noBackground} onClick={() => setSelectedNavItem(item.label)}>
                    {item.label}
                </Tab>
            ))}
        </div>
        <div className="navConfig-container flex">
            {tabButtonArrayConfigs.map((item) => (
                <Tab key={item.label} isActive={selectedNavItem === item.label}  icon={item.icon} onlyIcon={item.onlyIcon} noBackground={item.noBackground} onClick={() => setSelectedNavItem(item.label)}>
                    {item.label}
                </Tab>
            ))}
        </div>
    </nav>
    );
};