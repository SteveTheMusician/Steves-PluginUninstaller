export default function Tab({ isActive, onClick, children }) {
    return(
        <button onClick={onClick}
            className={isActive ? "tabButton active" : "tabButton"}>
            {children}
        </button>
    );
}