export function loadNews() {
	const rawData = localStorage.getItem("news")
	return rawData ? JSON.parse(rawData) : []
}

export function saveNews(news) {
	localStorage.setItem("news", JSON.stringify(news))
}

export function removeNews(id) {
	const news = loadNews().filter((i) => i.id != id)
	saveNews()
}
