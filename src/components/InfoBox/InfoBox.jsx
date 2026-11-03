import './infoBox.css'
import classNames from 'classnames';
import Icon from '../Icon/Icon';

export default function InfoBox({text,id, classes}) {
    return(
        <div className={classNames("infobox flex",classes)} id={id}>
            <div classname="infobox-iconContainer flex">
                <Icon name={'information'} color={'#78a0b8fe'} size={'16'}/>
            </div>
            <div className="infobox-textContainer">
                <p>{text}</p>
            </div>
        </div>
    );
}