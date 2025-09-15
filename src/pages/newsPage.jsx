import { useState } from "react";
//import { NewsAPI } from "../components/NewsAPI";
import { Article } from "../components/Article";
import { useStore } from "../hooks/store";
import "../styling/newsPage.css";


export function NewsPage({}) {

	const {news} = useStore()

	return (
		<div className="news-page-main">
			<section className="api-news-section">
				<h1>DummyJSON News</h1>
				<section className="news-column">
					<div className="news-content">
						<div className="article-headline">Headline</div>
						<div className="article-image"></div>
						<div className="article-author">Author</div>
						<div className="article-date">12-12-2012</div>
						<div className="article-content">Content of the article is contained here and will be presented as thus</div>
					</div>
					<div className="api-news-content"></div>
					<div className="api-news-content"></div>
					<div className="api-news-content"></div>
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