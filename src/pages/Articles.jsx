
import Raptor from '../assets/raptor.jpg'
import  User  from '../assets/user.jpg'
import { TrendingTopics } from '../components/TrendingTopics'
import { TrendingWriters } from '../components/TrendingWriters'
import { ArticleCard } from '../components/ArticleCard'

import './Articles.css'

export function Articles() {


    // useMemo --> Only if there are too many articles in the API.
    // Filter por catergorias: https://www.youtube.com/watch?v=B9tDYAZZxcE&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29 (midu)

    

    return (
        <main className='articles-main articles-flow'>

            <input type="text" placeholder='Search a topic' className='searchbox' id='searchbox-input' />

            <h2 className='foryou'>For you</h2>

            <article className='article-cards-container'>
                <ArticleCard 
                date='2 weeks ago' 
                userimg={ User } 
                userName= 'Santi Federici' 
                userat='@userat' 
                title='Title' 
                img={ Raptor } 
                text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque sapiente repellendus reiciendis iste! Eum, possimus quod? Corrupti sapiente eius ipsa, soluta itaque incidunt omnis magni a ut fuga vero autem, fugiat commodi sit tempore, culpa minus delectus. Est quaerat omnis culpa iste molestiae, sint ducimus vel sed dolores? Modi, temporibus itaque rem reprehenderit nostrum adipisci mollitia? Ratione sequi tempora quas exercitationem,........' />
                
                <ArticleCard 
                date='2 weeks ago' 
                userimg={ User } 
                userName= 'Mati Navio' 
                userat='@userat' 
                title='Title' 
                img={ Raptor } 
                text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis pariatur modi eum harum dolorem...' />

                <ArticleCard 
                date='2 weeks ago' 
                userimg={ User } 
                userName= 'Exequiel Carizzo' 
                userat='@userat' 
                title='Title' 
                img={ Raptor } 
                text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis pariatur modi eum harum dolorem...' />
            </article>





            <aside className='trending-container'>
                <TrendingWriters />
                
                <TrendingTopics />
            </aside>
        </main>
    )
}