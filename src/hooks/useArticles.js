import { useState } from "react";
import {findArticles} from '../services/articles'

export function useArticles() {
    const [articles, setArticles] = useState()

    const getArticles = async () => {
        const newArticles = await findArticles()
        setArticles(newArticles)
    }

    return {articles, getArticles}
}