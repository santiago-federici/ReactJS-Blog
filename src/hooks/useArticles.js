import { useState } from "react";
import {findArticles} from '../services/articles'

export function useArticles() {
    const [articles, setArticles] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const getArticles = async () => {
        const newArticles = await findArticles()
        setArticles(newArticles)

        setIsLoading(false)
    }

    return {articles, getArticles, isLoading}
}