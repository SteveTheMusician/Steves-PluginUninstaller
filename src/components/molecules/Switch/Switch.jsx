import './Switch.css'

export default function Switch({type,id,name,children}) {
    return(
        <>
            <label className="switch">
                <input className="" type={type} id={id} name={name} />
                <span className="switch_slider"></span>
            </label>
        </>
    );
}