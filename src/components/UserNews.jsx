//import Post from "./Post"

const newss = []; {}

export function UserNews() {
    return (
        <div>
            {newss.map(p => (
                <News title={p.title} content={p.content} date={p.date} key={p.id} />
            ))}
        </div>
    )
}

export default UserNews;