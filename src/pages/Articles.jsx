import { TrendingTopics } from '../components/TrendingTopics'
import { TrendingWriters } from '../components/TrendingWriters'
import {useArticles} from '../hooks/useArticles'
import { LoadingMain } from '../components/Loading/LoadingMain'
import { useSearch } from '../hooks/useSearch'
import { ArticlesContainer } from '../components/Articles/ArticlesContainer'
import { useEffect } from 'react'

import './Articles.css'

export function Articles() {

    const {search, setSearch, error} = useSearch()
    const {articles, getArticles, isLoading} = useArticles({search})

    // useMemo --> Only if there are too many articles in the API.
    // Filter por catergorias: https://www.youtube.com/watch?v=B9tDYAZZxcE&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29 (midu)

    useEffect(() => {
        setSearch('bitcoin')
        getArticles()
    }, [])

    useEffect(() => {
        // Preventing the articles to disappear
        if(search !== ''){
            getArticles()
        }
    }, [search])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // Preventing the articles to disappear
        if(search !== ''){
            getArticles()
        }
    }

    const handleChange = (e) => {
        const newSearch = e.target.value
        if(newSearch.startsWith(' ')) return
        setSearch(newSearch)
      }

    return (
        isLoading 
        ?
        <>
            <LoadingMain />
        </>
        :
        <>
            <main className='articles-main articles-flow'>
                <form onSubmit={handleSubmit}>
                    <input 
                    placeholder='Search a topic' 
                    className='searchbox' 
                    id='searchbox-input' 
                    onChange={handleChange}
                    value={search} />
                    <button>Search</button>
                    <p>{error}</p>
                </form>

                <h2 className='foryou'>For you</h2>

                <ArticlesContainer articles={articles} />

                <aside className='trending-container'>
                    <TrendingWriters />
                    
                    <TrendingTopics />
                </aside>
            </main>
        </>
            
    )
}
