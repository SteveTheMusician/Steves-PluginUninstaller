import Icon from '../../Icon/Icon';
import './Input.css'
import classNames from 'classnames';

export default function Input({type,id,value,name,classes,placeholder,isDatalist,datalistId,datalistItems,onChange,label,checked, checkedState}) {

    if(checkedState && value && checkedState.indexOf(value) >= 0) {
        checked = 'checked'
    }

    return (
        <label className={classNames((type === 'checkbox' || type === 'radio') ? 'checkboxLabel': null)} >  
            <input id={id} type={type} value={value}
                name={name}
                className={classNames(classes)}
                list={datalistId}
                placeholder={placeholder} 
                onChange={onChange} 
                defaultChecked={checked}/>
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
        </label>
    );
}