
// The button that is used for the user submitted articles to enable a form of deletion
export function Button({ label, onClick, icon }) {

    return (<button style={{
        width: 50,
        height: 20,
        display: "flex",
        backgroundColor: "var(--primary)",
        color: "var(--background)",
        textShadow: "2px 2px 4px var(--background)",
        borderRadius: "2rem",
        border: "5px solid var(--secondary)",
        marginRight: "2rem",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    }} onClick={onClick}>{icon ?? null}{label}</button>)
}