import './Switch.css'

export default function Switch({type,id,name,checked,children}) {
    return(
        <>
            <label className="switch">
                <input className="" type={type} id={id} name={name} defaultChecked={checked}/>
                <span className="switch_slider"></span>
            </label>
        </>
    );
}