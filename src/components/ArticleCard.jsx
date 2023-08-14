import { HiArrowNarrowRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'


export function ArticleCard({img, userimg, userName, userat, title, text, date}) {

    return(
        
    <section className='article-card'>
                <img src={ img } alt=""/>



                <section className='article-card__info'>
                    <span className='article-card__date'>{ date }</span>
                    <h2>{ title }</h2>
                    <p>{ text }</p>
                </section>

                <div className='article-card__user'>
                    <img src={ userimg } alt="" />
                    <div>
                        <p>{ userName }</p>
                        <p className='article-card__user-at'>{ userat }</p>
                    </div>
                </div>

                <NavLink to={'/readmore'} className='readmore-btn'><HiArrowNarrowRight className='hiarrownarrowright' /></NavLink>



        </section>    
    )
}