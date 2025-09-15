import './App.css'
import { useState } from 'react'
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Nav";

import { NewsPage } from "./pages/NewsPage";
import { SubmitPage } from "./pages/SubmitNews";
import { saveNews, loadNews } from "./localStorageUtil";


function App() {
  
	const [news, setNews] = useState([]);

  	useEffect(() => {
		setNews(loadNews());
		return () => {}
	}, [setNews, loadNews]);

	const addNews = (newNews) => {
		const updated = [...news, newNews]
		saveNews(updated)
		setNews(updated)
	}  
 
	let content = <div>404 Not Found</div>;

  return (
	<BrowserRouter>
		  <>
			  <div id="sillier-news">
				  <Header />
				  <Navbar>
					<Link to="/">NewsPage</Link>
					<Link to="/submit">SubmitPage</Link>
				  </Navbar>

				  <Routes>
					<Route path="/" element={<NewsPage />}/>
					<Route path="/submit" element={<SubmitPage />}/>
				  </Routes>
			  </div>
			  <Footer />
		  </>
	</BrowserRouter>
  )
}

export default App
