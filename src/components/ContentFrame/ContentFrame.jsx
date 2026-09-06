export default function ContentFrame({frameName, children}) {
    return(
        <div id={frameName} className="contentFrame">
            {children}
        </div>
    )
}