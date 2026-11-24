import ContentFrame from "../../contentFrame/contentFrame"
import classNames from "classnames"
import Window from '../../Window/Window'
import Box from "../../Box/Box"
import { OptionsEmpty,OptionsButton } from "../../components.import"
import versiondata from '../../../../version.json' with { type: "json" }
import resetAppData from "../../../core/resetAppData"

export default function ConfigWindow({selectedNavItem,setSelectedNavItem}) {

    const windowLink = "tab_config"
    const isVisible = selectedNavItem === windowLink;
    
    return(
        <Window isVisible={isVisible}>
            <ContentFrame>
                <Box classes={'box-manualUninstall-Input'} hiddenClass={'box-big--hidden'} trigger={isVisible} delay={1}>
                    <h1>Configurations</h1>

                </Box>
                <Box>
                    <div className='option-container'>
                        <div className="options-headlineContainer dFlex">
                            <h3>Personal</h3>
                        </div>
                        <OptionsEmpty label={'Profile'}>
                        </OptionsEmpty>
                    </div>
                    <div className='option-container'>
                        <div className="options-headlineContainer dFlex">
                            <h3>Theme</h3>
                        </div>
                        <OptionsEmpty label={'Themes'}>
                        </OptionsEmpty>
                    </div>
                    <div className='option-container'>
                        <div className="options-headlineContainer dFlex">
                            <h3>App Data</h3>
                        </div>
                        <OptionsButton label={'Delete All Data'} sublabel={"Reset the whole app and delete all local stored data. Can't be undone"} 
                        buttonLabel={'Reset'} classes={'button-reset'} onClick={resetAppData}
                        />
                    </div>
                    <div className='option-container'>
                        <div className="options-headlineContainer dFlex">
                            <h3>About</h3>
                        </div>
                        <OptionsEmpty label={'Developer: '}>
                            <p>{versiondata.developer}</p>
                        </OptionsEmpty>
                        <OptionsEmpty label={'Version: '} sublabel={versiondata.build}>
                            <p>{versiondata.version}</p>
                        </OptionsEmpty>
                    </div>
                </Box>
                
            </ContentFrame>            
        </Window>
    )
}