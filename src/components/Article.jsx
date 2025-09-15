import { useStore } from "../hooks/store"
import { Button } from "./Button"

export function Article({ title, image, author, date, content, id }) {
    const { deleteArticle } = useStore()
    function parseDate(date) {
        const dateStr = new Date(date).toLocaleDateString("sv-SE")
        return dateStr
    }

    return (
        <div className="news-content">
            <div style={{ display: "flex", 
                justifyContent: "space-between",
                width: "100%"}}>
                <div className="article-headline" style={{ marginLeft: "2rem"}}>{title}</div>
                <Button label={"Delete"} onClick={() => deleteArticle(id)}/>
            </div>
            <div className="article-image">{image}</div>
            <div className="article-author">{author}</div>
            <div className="article-date">{date}</div>
            <div className="article-content">{content}</div>
        </div>
    )
}