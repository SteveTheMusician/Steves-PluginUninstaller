import classNames from "classnames"
import { useState, useEffect } from "react";
import ContentFrame from "../../contentFrame/contentFrame"
import { useKnowledge } from "../../../utils/KnowledgeProvider";
import Window from '../../Window/Window'
import Box from '../../Box/Box';
import { ButtonFolder, OptionsSwitch, OptionsEmpty } from "../../components.import";
import { Input,Button, Dropdown } from "../../molecules/molecules.import";
import { useDialog } from "../../../utils/DialogProvider";
import { open } from '@tauri-apps/plugin-dialog';
import { homeDir } from '@tauri-apps/api/path';
import { setAppStorage } from "../../../core/appStorage";
import { default_userAlias } from "../../../core/appDefaults";

export default function StartWindow({setShowStartScreen}) {

    const pluginsKnowledge = useKnowledge()
    const knowledgeVstPlugins = pluginsKnowledge.knowledge.plugIns
    const isVisible = true
    const defaultUninstallPathNames =  []
    Object.keys(knowledgeVstPlugins).map((vst) => {
        defaultUninstallPathNames.push(vst)
    })
    const [userAlias, setUserAlias] = useState(null)
    const [selectedPath, setSelectedPath] = useState(null)
    const [selectPathLoading, setSelectPathLoading] = useState(false)
    const [systemDefaultHomeDir, setSystemDefaultHomeDir] = useState(null)
    const [userDirValid, setUserDirValid] = useState('')
    const [userName, setUserName] = useState('')
    const dawSelectOptions = [{"optionname":"placeholder","optionlabel": "None", "selected": "true"},{"optionname":"flstudio","optionlabel": "FL Studio"},{"optionname":"cubebase","optionlabel": "Cubebase", "disabled": "true"}]

    useEffect(() => {
        async function loadHomeDir() {
            const home = await homeDir();
            setSystemDefaultHomeDir(home)
        }
        if(!systemDefaultHomeDir) {
           loadHomeDir() 
        }
        const userHomeAppStorage = JSON.parse(localStorage.getItem('AppStorage')).user.userhome
        if(userHomeAppStorage !== '') {
            setSelectedPath(userHomeAppStorage)
        }
    },[])

    const changeUserAlias = (e) => {
        setUserAlias(e.target.value)
    }
    const handleFolderSelect = async () => {
        setSelectPathLoading(true)
        try {
            const path = await open({ directory: true, multiple: false, defaultPath: systemDefaultHomeDir });
            if(!path) return
            setSelectedPath(path)
            let username = path.split('/')
            username = username.slice(-1)[0]
            setUserName(username)
        } finally {
            setSelectPathLoading(false)
            setUserDirValid('')
        }
    }


    const saveUserInfo = () => {
        if(selectedPath) {
            setAppStorage('user','username',userName)
            setAppStorage('user','userhome',selectedPath)
            setAppStorage('user','useralias',userAlias ?? default_userAlias)
            setShowStartScreen(false)
        } else {
            setUserDirValid(false)
            return
        }
    }
    
    return (
        <Window isVisible={isVisible}>
            <ContentFrame classes={'appWindow-Start'}>
                <Box classes={''} hiddenClass={'box-big--hidden'} trigger={isVisible} delay={1}>
                    <h1>Welcome</h1>
                </Box>
                <Box>
                    <p>So that your Plugin-Uninstaller app can work properly, its neseccary to feed some data to it.</p>
                    <p>Please fill all star-marked Options. (*)</p>
                </Box>
                <Box>
                    <OptionsEmpty label={'User Alias'} sublabel={'Can be a pseudonym, just for the app profile'} >
                        <Input type={'text'} id={''} classes={''}
                            placeholder={'Default Name'} 
                            isDatalist={false}
                            onChange={(e) => changeUserAlias(e)}
                        />
                    </OptionsEmpty>
                    <OptionsEmpty label={'User Directory (PC)'} sublabel={'This folder is importand to remove installed plugins on your computer'} 
                        requiered={true} isValid={userDirValid} requieredText={'Please select your home Directory'}
                    >
                        <ButtonFolder id={'selectUserDirectory'} label={selectedPath} onClick={handleFolderSelect} disabled={selectPathLoading} title={selectedPath} value={selectedPath}>Select</ButtonFolder>
                    </OptionsEmpty>
                    <OptionsEmpty label={'User Name'} sublabel={'Cloned by the selected directory'} >
                        <p className="optionTitle">{userName}</p>
                    </OptionsEmpty>
                    <OptionsEmpty label={'Your DAW?'} sublabel={'If your DAW is listed, you have the option to clean registered plugins later on.'} >
                            <Dropdown optionsId={'select_daw'} options={dawSelectOptions}/>
                    </OptionsEmpty>
                </Box>
                <Box classes={'flexEnd'}>
                    <Button classes={'button-submit'} onClick={saveUserInfo}>Save</Button>
                </Box>
            </ContentFrame>
        </Window>
    );
}