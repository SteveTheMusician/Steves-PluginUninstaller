import './Button.css'
import classNames from 'classnames';
import Icon from '../../Icon/Icon';

export default function Button({id,value,classes,onClick,icon,onlyIcon,disabled,children}) {

    return (
        <button id={id} onClick={onClick}
            className={classNames('flex', {classes})} value={value}>
            {onlyIcon ? <Icon name={icon} color="" size={24} /> : children}
        </button>
    );
}