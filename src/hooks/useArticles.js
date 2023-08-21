import { useRef, useState } from "react";
import {findArticles} from '../services/articles'

export function useArticles({search}) {
    const [articles, setArticles] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const previousSearch = useRef(search)

    const getArticles = async () => {
        if (search == previousSearch.current) return
        previousSearch.current = search
        const newArticles = await findArticles({search})
        setArticles(newArticles)

        setIsLoading(false)
    }
    
    return {articles, getArticles, isLoading}
}