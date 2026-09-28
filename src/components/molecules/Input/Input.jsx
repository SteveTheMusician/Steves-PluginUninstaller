import './Input.css'
import classNames from 'classnames';

export default function Input({type,id,classes,placeholder,isDatalist,datalistId,datalistItems}) {

    return (
        <>
            <input id={id} type={type} className={classNames("inputData",classes)}
                                   list={datalistId}
                                   placeholder={placeholder} />
            {isDatalist ? 
                <datalist id={datalistId}>
                    {Object.keys(datalistItems).map((itemName) => (
                        <option key={itemName} value={itemName}>
                            {itemName}
                        </option>
                    ))}
                </datalist>:''
            }
        </>
    );
}