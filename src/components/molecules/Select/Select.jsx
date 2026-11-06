import './Select.css'
import classNames from 'classnames'

export default function Select({optionId,classes,options}){

    // Demo Object: [{"optionname":"testName","optionlabel": "Test Option"},{"optionname":"testName2","optionlabel": "Test Option 2"}]

    return(
        <select id={optionId} className={classNames(classes)}>
            {options.map((optionItem) => (
                    <option key={optionItem.optionname} name={optionItem.optionname}>{optionItem.optionlabel}</option>
                ))}
        </select>
    )
}