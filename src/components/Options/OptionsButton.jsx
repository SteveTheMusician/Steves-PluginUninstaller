import './Options.css'
import { Button } from '../molecules/molecules.import';

export default function OptionsButton({label,sublabel,id,name,value,buttonLabel,onClick, classes}){
    return(
        <div className='Options-Container OptionsButton-Container flex'>
            <div className="Options-ContentLeft">
                <p className="optionTitle">{label}</p>
                <p className='sublabel'>{sublabel}</p>
            </div>
            <div className="Options-ContentRight dFlex">
                <Button id={id} name={name} value={value} onClick={onClick} classes={classes}>{buttonLabel}</Button>
            </div>
        </div>
    );
}