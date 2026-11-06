import './Options.css'
import classNames from 'classnames';

export default function OptionsEmpty({label,sublabel,classes,children}){
    return(
        <div className={classNames('Options-Container flex ',classes)}>
            <div className="Options-ContentLeft">
                <p className="optionTitle">{label}</p>
                <p className='sublabel'>{sublabel}</p>
            </div>
            <div className="Options-ContentRight dFlex">
                {children}
            </div>
        </div>
    );
}