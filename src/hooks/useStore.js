import { useEffect, useState } from "react"
import { loadNews } from "../localStorageUtil"

export function useStore() {
    const [news, setNews ] = useState([])
    const [apiNews, setApiNews ] = useState([])
    useEffect(() => {
        const newsLoaded = loadNews()
        setNews(newsLoaded)
    }, [])
    return {news}
}