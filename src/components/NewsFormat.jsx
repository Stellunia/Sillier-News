export function NewsFormat({ title, image, author, date, content }) {

    function parseDate(date) {
        const dateStr = new Date(date).toLocaleDateString("sv-SE")
        return dateStr
    }

    return (
        <div className="news-content">
            <div className="article-headline">{title}</div>
            <div className="article-image">{image}</div>
            <div className="article-author">{author}</div>
            <div className="article-date">{date}</div>
            <div className="article-content">{content}</div>
        </div>
    )
}