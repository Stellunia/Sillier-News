import { SubmitForm } from "../components/SubmitForm";
import { loadNews, saveNews } from "../localStorageUtil";
import { useState } from "react";
import { useEffect } from "react";

export function SubmitPage() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        setNews(loadNews());
    }, []);

    const addNews = (newNews) => {
        const updated = [...news, newNews]
        saveNews(updated)
        setNews(updated)
    }

    return (
        <div className="submit-page-main">
            <SubmitForm addNews={addNews} />
        </div>
    );
}

