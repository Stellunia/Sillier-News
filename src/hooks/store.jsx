import { createContext, useContext, useEffect, useState } from "react"
import { loadNews, removeNews } from "../localStorageUtil"
const StoreContext = createContext(null)

// Helps with various functions to do with article removal - such as the article delete button, -
// - updating the article display in realtime when an article is removed from localstorage so the user sees an immediate effect when clicking "Delete"
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