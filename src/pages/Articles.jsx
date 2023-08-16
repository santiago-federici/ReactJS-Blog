// import Raptor from '../assets/raptor.jpg'
import  User  from '../assets/user.jpg'
import { TrendingTopics } from '../components/TrendingTopics'
import { TrendingWriters } from '../components/TrendingWriters'
import { ArticleCard } from '../components/ArticleCard'

import {useArticles} from '../hooks/useArticles'

import './Articles.css'
import { useEffect } from 'react'

export function Articles() {

    const {articles, getArticles} = useArticles()

    // useMemo --> Only if there are too many articles in the API.
    // Filter por catergorias: https://www.youtube.com/watch?v=B9tDYAZZxcE&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29 (midu)

    useEffect(() => {
        getArticles()
    }, []);
    
    const usableArticles = articles && articles.articles

    return (
        <main className='articles-main articles-flow'>

            <input type="text" placeholder='Search a topic' className='searchbox' id='searchbox-input' />

            <h2 className='foryou'>For you</h2>

            <section className='article-cards-container'>
                {
                    articles && (
                        usableArticles.map(usableArticle => (
                        <ArticleCard key={usableArticle.index}
                        date={usableArticle.publishedAt} 
                        userimg={ User } 
                        userName={usableArticle.author} 
                        userat='@userat' 
                        title={usableArticle.title} 
                        img={usableArticle.urlToImage} 
                        text={usableArticle.description} />
                        ))


                    )
                }
            </section>





            <aside className='trending-container'>
                <TrendingWriters />
                
                <TrendingTopics />
            </aside>
        </main>
    )
}