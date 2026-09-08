export default function ContentFrame({frameName, classes, children}) {
    return(
        <div id={frameName} className={ classes + ' contentFrame' }>
            {children}
        </div>
    )
}