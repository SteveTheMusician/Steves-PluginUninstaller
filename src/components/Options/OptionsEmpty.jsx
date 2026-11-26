import './Options.css'
import classNames from 'classnames';

export default function OptionsEmpty({label,sublabel,classes,requiered, requieredText, isValid, children}){
    return(
        <div className={classNames('Options-Container ',classes,isValid === false ? 'Options-Container--inValid': null)}>
            <div className='Options-Container-Main flex'>
                <div className="Options-ContentLeft">
                    <p className="optionTitle">{label} {requiered ? ' *' : null}</p>
                    <p className='sublabel'>{sublabel}</p>
                </div>
                <div className="Options-ContentRight dFlex">
                    {children}
                </div>
            </div>
            <div className='Options-Container-ErrorText'>
                {requiered ? <p className={classNames('text-requieredError', isValid === false ? null : 'dNone')}>{requieredText}</p> : null }
            </div>
        </div>
    );
}