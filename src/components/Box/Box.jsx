import { useState, useEffect } from "react";
import classNames from 'classnames';
import './Box.css';

export default function Box({ type, id, classes, hiddenClass, children, delay = 0, trigger = false }) {

    let [hiddenBoxElem, setHiddenBoxElem] = useState(true) // startet versteckt

    delay = delay * 150

    useEffect(() => {
    if (!trigger) {
        setHiddenBoxElem(true); // Reset für den nächsten Durchgang
        return;
    }
        const timer = setTimeout(() => setHiddenBoxElem(false), delay);
        return () => clearTimeout(timer);
    }, [trigger, delay]);

    return (
        <div id={id} className={classNames('box', classes, hiddenBoxElem ? hiddenClass : '')}>
            {children}
        </div>
    )
}