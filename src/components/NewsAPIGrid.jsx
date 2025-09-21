import { NewsAPIForm } from "./NewsAPIForm";

// Handles putting the articles into an array and then slices off the ones past the max amount
// - it then maps them out in the NewsAPIForm through a map to be displayed in a certain order
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