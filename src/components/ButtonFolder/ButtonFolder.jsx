import './ButtonFolder.css'
import { Button } from '../molecules/molecules.import'
import { folderSelect_defaultLabel } from '../../core/appDefaults'

export default function ButtonFolder({label,id,value,classes,title,onClick,icon,onlyIcon,disabled,children}) {
    if(label === '' || label === null) {
        label = folderSelect_defaultLabel
    }
    return(
        <label id={'buttonFolderLabel_'+id} className={'flex buttonFolder'} title={title}>
            <Button id={id} value={value} 
                classes={classes} onClick={onClick} 
                icon={icon} onlyIcon={onlyIcon} disabled={disabled} 
                >{children}
            </Button>
            <p className="buttonFolder-text">{label}</p>
        </label>
    )
}