import './Input.css'
import classNames from 'classnames';

export default function Input({type,id,classes,placeholder,isDatalist,datalistId,datalistItems,onChange,label}) {

    return (
        <label className={classNames(type === 'checkbox' ? 'checkboxLabel': null)} >  
            <input id={id} type={type} className={classNames(classes)}
                                   list={datalistId}
                                   placeholder={placeholder} 
                                   onChange={onChange} />
                {label}
            {type === 'checkbox' ? <span className="checkbox"></span> : null}
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