
import { useState } from "react";
import Tab from "../tab/Tab";

export default function Nav() {

    const tabButtonArray = ["Installed Plugins", "Manual uninstall", "Brain"];
    const [activeTab, setActiveTab] = useState("Installed Plugins");

    return(
    <nav className="dFlex">
        <div className="logo-container flex">
            <img src="/tauri.svg" className="appLogo" alt="App Logo" />
        </div>
        <div className="navTabs-container dFlex">
           {tabButtonArray.map((label) => (
                <Tab key={label} isActive={activeTab === label}  onClick={() => setActiveTab(label)}>
                    {label}
                </Tab>
            ))}
        </div>
        <div className="nacConfig-container flex">
            <Tab key="App Config" isActive={activeTab === 'App Config'}  onClick={() => setActiveTab('App Config')}>
                    {'Conf'}
            </Tab>
        </div>
    </nav>
    );
};