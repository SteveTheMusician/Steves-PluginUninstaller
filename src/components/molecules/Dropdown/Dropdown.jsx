import './Dropdown.css'
import { useState } from 'react'
import classNames from 'classnames'
import Icon from '../../Icon/Icon'

export default function Dropdown({optionId,classes,options}){
    // Demo Object: [{"optionname":"placeholder","optionlabel": "None", "selected": "true"},{"optionname":"flstudio","optionlabel": "FL Studio"}]
    const [dropdownItemActive, setDropDownItemActive] = useState(false)    
    const initialSelectedObj = options.find(({optionname,selected}) => optionname === 'placeholder' && selected === 'true' || selected === 'true')
    const [value, setValue] = useState('');
    const selectedObj = options.find(({optionname}) => optionname === value) ?? initialSelectedObj

    const handleDropdownActive = () => {
        setDropDownItemActive(!dropdownItemActive);
    };
    const handleSelectItem = (e) => {
        setValue(e.target.getAttribute("data-value"));
        setDropDownItemActive(false)
        //Call costum Function
        // callChangeFunction(e.target.getAttribute("data-value"));
    }
    console.log('options',options)
    return(
        <div className={classNames('dropdown')} id={'dropdown_'+optionId}>
            <select className={classNames(classes)}>
                {options.map((optionItem) => (
                    <option key={optionItem.optionname} name={optionItem.optionname} selected={optionItem.selected ? optionItem.selected : null} 
                        disabled={
                            optionItem.optionname === 'placeholder' || optionItem.disabled === 'true' ? 'disabled' : null
                        }
                    >{optionItem.optionlabel}</option>
                    ))}
            </select>
            <div className={classNames('dropdown-selectedItem flex',dropdownItemActive? 'dropdown-selectedItem--active' : null)} 
                onClick={handleDropdownActive}>
                {selectedObj.optionlabel}
                <div className="dropdown-iconContainer flex">
                    <Icon name={'BunnyDropDownClosed'} size={'12'} />
                    <Icon name={'BunnyDropDownOpen'} size={'12'} />
                </div>
            </div>
            <div className={classNames('dropdown-list', dropdownItemActive? null : 'dropdown-list--hidden')}>
                {
                    options.map(function(optionObj) {
                        const option = optionObj.optionname === 'placeholder' ? null : <div className={classNames('dropdown-list-item', 
                                optionObj.optionname === 'placeholder' || optionObj.disabled === 'true' ? 'dropdown-list-item-disabled' : null)}
                            id={optionObj.optionname}
                            key={optionObj.optionname}
                            data-value={optionObj.optionname}
                            onClick={handleSelectItem}
                            >{optionObj.optionlabel}
                        </div>
                        return option
                    })
                }
            </div>
        </div>
    )
}