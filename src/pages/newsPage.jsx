import { useState, useEffect } from "react";
//import { NewsAPI } from "../components/NewsAPI";
import { Article } from "../components/Article";
import { useStore } from "../hooks/store";
import "../styling/newsPage.css";
import { apiGetNews, apiGetPlaceholderImage, apiGetDateForNews, apiGetAuthorForNews } from "../api/NewsAPI";
import { NewsAPIGrid } from "../components/NewsAPIGrid.jsx";


export function NewsPage({}) {

	const [newsApiArticles, setArticles] = useState([]);

	// Calls all shenanigans to put together the API article
	// Fetches the posts' title to put into headline, image placeholders, firstName and lastName into authors
	// and lastly birthdate of users to put as the date of the article (many old articles, yippiee)
	useEffect(() => {
		(async function fetchData() {
			const news = await apiGetNews();
			const authors = await apiGetAuthorForNews();
			const date = await apiGetDateForNews();

			const authorNames = authors.users.map(user => 
				`${user.firstName} ${user.lastName}`
			);

			const birthDates = date.users.map(user => {
				return new Date(user.birthDate).toLocaleDateString('se-SV', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				});
			});

			const imagePromises = news.map(() => apiGetPlaceholderImage());
			const images = await Promise.all(imagePromises);

			const articles = news.map((article, index) => ({...article,
				date: birthDates [index % birthDates.length], 	
				author: authorNames[index % authorNames.length], 
				image: images[index]}))

			setArticles(articles)
		})()
	}, []);

	const {news} = useStore()

	return (
		<div className="news-page-main">
			<section className="api-news-section">
				<h1>DummyJSON News</h1>
				<section className="news-column">
        			<NewsAPIGrid
          				maxArticles={12} 
						allArticles={newsApiArticles}/>
				</section>
			</section>
			<section className="user-news-section">
				<h1>User Submitted News</h1>
				<section className="news-column">
						{news.map(p => (
							<Article title={p.title} author={p.author} date={p.date} content={p.content} id={p.id} key={p.id} />
						))}
				</section>
			</section>
		</div>
	);
}