import './Options.css'
import { Switch } from '../molecules/molecules.import';

export default function OptionsSwitch({label,sublabel,type,id,name}){
    return(
        <div className='OptionsSwitch-Container flex'>
            <div>
                <p>{label}</p>
                <p className='sublabel'>{sublabel}</p>
            </div>
            <Switch type={type} id={id} name={name} ></Switch>
        </div>
    );
}