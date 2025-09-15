import './App.css'
import { useState } from 'react'
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Nav";

import { NewsPage } from "./pages/NewsPage";
import { SubmitPage } from "./pages/SubmitNews";
import { saveNews, loadNews } from "./localStorageUtil";
import { StoreProvider } from './hooks/store';


function App() {
  

	let content = <div>404 Not Found</div>;

  return (
	<BrowserRouter>
		  <StoreProvider>
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
			  <ToastContainer/>
		  </StoreProvider>
	</BrowserRouter>
  )
}

export default App
