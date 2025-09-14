export function loadNews() {
	const rawData = localStorage.getItem("news")
	return rawData ? JSON.parse(rawData) : []
}

export function saveNews(news) {
	localStorage.setItem("news", JSON.stringify(posts))
}

export function removeNews(id) {
	const posts = loadNews().filter((i) => i.id != id)
	saveNews()
}
