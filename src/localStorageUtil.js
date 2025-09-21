
// Handles the loading of news from localstorage
export function loadNews() {
	const rawData = localStorage.getItem("news")
	let parsedData;
	try {
		parsedData = JSON.parse(rawData)
	} catch {
		alert("farded")
	}
	return parsedData ?? []
}

// Handles the saving of news to localstorage
export function saveNews(news) {
	localStorage.setItem("news", JSON.stringify(news))
}

// Handles removal of news from localstorage
export function removeNews(id) {
	const news = loadNews().filter((i) => i.id != id)
	saveNews(news)
}
