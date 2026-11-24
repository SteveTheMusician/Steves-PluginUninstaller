import './Button.css'
import classNames from 'classnames';
import Icon from '../../Icon/Icon';

export default function Button({id,value,classes,title,onClick,icon,onlyIcon,disabled,children}) {

    return (
        <button id={id} onClick={onClick}
            className={classNames('flex', classes)} value={value} disabled={disabled}
            title={title}>
            {onlyIcon ? <Icon name={icon} color="" size={24} /> : children}
        </button>
    );
}