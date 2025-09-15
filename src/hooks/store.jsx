import { createContext, useContext, useEffect, useState } from "react"
import { loadNews, removeNews } from "../localStorageUtil"
const StoreContext = createContext(null)

export function StoreProvider({children}) {
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

    return ( <StoreContext.Provider value={{news, apiNews, deleteArticle}}>{children}</StoreContext.Provider>)
}

export function useStore() {
    return useContext(StoreContext)
 }