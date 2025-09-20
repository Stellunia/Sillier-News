import { NewsAPIForm } from "./NewsAPIForm";

export function NewsAPIGrid({ allArticles, maxArticles }) {
    const newsApiArticles = allArticles.slice(0, maxArticles);

    return (
        <>
            {newsApiArticles.map((article) => (
                <NewsAPIForm article={article} key={article.id}/>
            ))}
        </>
    );
}