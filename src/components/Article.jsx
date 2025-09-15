export function NewsFormat({ title, image, author, date, content }) {

    function parseDate(date) {
        const dateStr = new Date(date).toLocaleDateString("sv-SE")
        return dateStr
    }

    return (
        <div className="news-content">
            <div style={{ display: "flex", 
                justifyContent: "space-between",
                width: "100%",
                marginLeft: "2rem",
                marginRight: "2rem"}}>
                <div className="article-headline">{title}</div>
                <button style={{ width: 5, 
                    height: 20, 
                    backgroundColor: "#edafb8", 
                    borderRadius: "2rem",
                    border: "5px solid #a53860"}}></button>
            </div>
            <div className="article-image">{image}</div>
            <div className="article-author">{author}</div>
            <div className="article-date">{date}</div>
            <div className="article-content">{content}</div>
        </div>
    )
}