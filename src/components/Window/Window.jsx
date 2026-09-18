import './Window.css'
import classNames from "classnames"
import { useState, useEffect } from "react";

export default function Window({isVisible,children}){
    return(
        <div className={classNames('appWindow', isVisible ? '' : 'dNone')}>
            {children}
        </div>
    )
}