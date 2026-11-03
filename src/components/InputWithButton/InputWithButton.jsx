import './InputWithButton.css'
import { Input,Button } from "../molecules/molecules.import";
import classNames from "classnames";

export default function InputWithButton({id,classes,placeholder,isDatalist,datalistId,datalistItems,buttonId,buttonName,buttonClasses}) {

    return(
        <div className="input-withButton flex">
            <Input type={'text'} id={id} classes={classes}
                placeholder={placeholder} 
                isDatalist={isDatalist} datalistId={datalistId} datalistItems={datalistItems} 
            />
            <Button className={classNames(buttonClasses)} id={buttonId}>{buttonName}</Button>
        </div>
    )
}