import { HiArrowNarrowRight } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';


export function ArticleCard({img, userimg, userName, userat, title, text, date}) {

    const divRef = useRef(null);
    const imgRef = useRef(null);
    const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.height = `${divHeight}px`;
    }
  }, [divHeight]);



  // Formatting 'date'
    const dateTime = new Date(date);
    
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString(); //Only use for 'readmore' page
    

    return(

        
      <article className='article-card' ref={divRef}>

        <img src={ img } alt="" ref={imgRef} />

        <section className='article-card__info'>

            <div className='article-card__info-top'>

                <NavLink to={'/readmore'} className={'article-card__title'}><h3>{ title }</h3></NavLink>

                <div className='article-card__user'>
                    <img src={ userimg } alt="" />
                    <div>
                        <p>{ userName }</p>
                        <p className='article-card__user-at'>{ userat }</p>
                    </div>
                </div>

            </div>

            <p>{ text }</p>


            <div className='article-card__info-bottom'>
                <span className='article-card__date'>{ formattedDate }</span>
                
                <NavLink to={'/readmore'} className='readmore-btn'><HiArrowNarrowRight className='hiarrownarrowright' /></NavLink>
            </div>
        </section>
      </article>
    )
}