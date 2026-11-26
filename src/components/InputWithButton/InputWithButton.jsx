import './InputWithButton.css'
import { Input,Button } from "../molecules/molecules.import";
import classNames from "classnames";

export default function InputWithButton({id,classes,placeholder,isDatalist,datalistId,datalistItems,buttonId,buttonName,buttonClasses,functionName,onChange, isValid}) {

    return(
        <div className="input-withButton flex">
            <Input type={'text'} id={id} classes={classes}
                placeholder={placeholder} 
                isDatalist={isDatalist} datalistId={datalistId} datalistItems={datalistItems} 
                onChange={onChange}
            />
            <Button className={classNames(buttonClasses)} id={buttonId} onClick={() => {functionName()}}>{buttonName}</Button>
            {isValid === false ? <p className={'text-requieredError'}>Please enter a valid name</p> : null}
        </div>
    )
}