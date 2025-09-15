
export function Button({ label, onClick, icon }) {

    return (<button style={{
        width: 50,
        height: 20,
        backgroundColor: "#edafb8",
        borderRadius: "2rem",
        border: "5px solid #a53860",
        marginRight: "2rem"
    }} onClick={onClick}>{icon ?? null}{label}</button>)
}