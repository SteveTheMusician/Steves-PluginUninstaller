import { useState, useEffect } from "react";
import classNames from 'classnames';
import './Box.css';

export default function Box({type,id,classes,children}){

    window.boxElemTimer =+ 150
    let [showBoxElem, setShowBoxElem] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setShowBoxElem(false), window.boxElemTimer)
        return () => clearTimeout(timer) // Cleanup bei Unmount
    }, []) // leeres Array = läuft nur einmal beim Mounten
    
    let hiddenClass = "box-big--hidden"


    return(
        <div id={id} className={classNames('box',classes, showBoxElem ? hiddenClass : '')}>
            {children}
        </div>
    )
}