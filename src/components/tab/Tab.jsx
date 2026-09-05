import classNames from 'classnames'
import Icon from '../Icon/Icon';

export default function Tab({ isActive, onClick, icon, onlyIcon,noBackground , children }) {

    return(
        <button onClick={onClick}
            className={classNames('flex', {"tabButton--noBackground": noBackground,"tabButton active" : isActive, "tabButton": !isActive})}>
            {onlyIcon ? <Icon name={icon} color="" size={24} /> : children}
        </button>
    );
}