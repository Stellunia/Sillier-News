export function NewsAPIForm({ article }) {

    // How the article should be presented in the website
    return (
        <div className="news-content">
            <div className="article-headline" style={{ padding: "0.5rem" }}>{article.title}</div>
            <div className="article-image">
                <img src={article.image} alt={article.title} style={{ width: "230px", height: "150px", borderRadius: "1rem" }} />
            </div>
            <div className="article-author">{article.author}</div>
            <div className="article-date">{article.date}</div>
            <div className="article-content">{article.body}</div>
        </div>
    )
}