import Icon from '../../Icon/Icon';
import './Input.css'
import classNames from 'classnames';
import { Button } from '../molecules.import';

export default function Input({type,id,value,name,classes,placeholder,isDatalist,
    datalistId,datalistItems,onChange,label,checked, checkedState,webkitdirectory, directory,
    buttonLabel}) 
    {

    if(checkedState && value && checkedState.indexOf(value) >= 0) {
        checked = 'checked'
    }

    return (
        <label className={classNames((type === 'checkbox' || type === 'radio') ? 'checkboxLabel': null, (type === 'file') ? 'fileInputLabel' : null)}>  
            <input id={id} type={type} value={value}
                name={name}
                className={classNames(classes)}
                list={datalistId}
                placeholder={placeholder} 
                onChange={onChange} 
                defaultChecked={checked}
                webkitdirectory={webkitdirectory}
                directory={directory}
            />
                {label}
            {(type === 'checkbox' || type === 'radio') ? <span className="checkbox"><Icon name={'carrotTest'} width={'24'} height={'24'}/></span> : null}
            {isDatalist ? 
                <datalist id={datalistId}>
                    {Object.keys(datalistItems).map((itemName) => (
                        <option key={itemName} value={itemName}>
                            {itemName}
                        </option>
                    ))}
                </datalist>:''
            }
            {(type === 'file') ? <Button onClick={(e) => {e.target.closest('.fileInputLabel').click()}}>{buttonLabel}</Button> : null}
        </label>
    );
}