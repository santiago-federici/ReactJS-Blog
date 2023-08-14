import { TrendingTopics } from '../components/TrendingTopics'
import './Home.css'

export function Home() {
    return (
        <main className='home-main home-flow'>
            <h1 className='home-title'>Welcome to InfoHub!</h1>

            <TrendingTopics />

            
        </main>
    )
}