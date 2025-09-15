import { useEffect, useState } from "react"
import { loadNews, removeNews } from "../localStorageUtil"

export function useStore() {
    const [news, setNews ] = useState([])
    const [apiNews, setApiNews ] = useState([])

    

    function deleteArticle(id) {
        removeNews(id)
        const newsLoaded = loadNews()
        setNews(newsLoaded)

    }
    useEffect(() => {
        const newsLoaded = loadNews()
        setNews(newsLoaded)
    }, [])
    return {news, apiNews, deleteArticle}
}