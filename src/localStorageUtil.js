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

export function saveNews(news) {
	localStorage.setItem("news", JSON.stringify(news))
}

export function removeNews(id) {
	const news = loadNews().filter((i) => i.id != id)
	saveNews(news)
}
