import './Options.css'
import { Switch } from '../molecules/molecules.import';
import classNames from 'classnames';

export default function OptionsSwitch({label,sublabel,type,id,name, isValid}){
    return(
        <div className={classNames('Options-Container OptionsSwitch-Container flex',isValid === false ? 'Options-Container--inValid': null)}>
            <div className="Options-ContentLeft">
                <p className="optionTitle">{label}</p>
                <p className='sublabel'>{sublabel}</p>
            </div>
            <div className="Options-ContentRight dFlex">
                <Switch type={type} id={id} name={name} ></Switch>
            </div>
        </div>
    );
}