import './TrendingTopics.css'

export function TrendingTopics ({ getArticles, setSearch }) {
  const handleClick = (e) => {
    setSearch(e.target.value) // not working correctly
    getArticles()
  }

  return (
    <div className='topics-cards-container'>
      <h2>Trending Topics</h2>
      <h2>Trending Topics</h2>
      {/* <section className='topic-card'>
          <img
          src="https://nationalseniors.com.au/generated/1440w-3-2/istock-1294303237-cryptocurrency-investment-financial-22-jpg.jpg?1644369957"
          alt="" />
          <div className="topic-card__info">
              <h2>Crypto currency</h2>
              <button className='topic-card__gotobtn'>Topic</button>
          </div>
      </section> */}

      <section className='topic-card' onClick={handleClick}>
        <h3>#BITCOIN</h3>
      </section>
      <section className='topic-card'>
        <h3>#FOOTBALL</h3>
      </section>
      <section className='topic-card'>
        <h3>#MESSI</h3>
      </section>
      <section className='topic-card'>
        <h3>#MILEI</h3>
      </section>
    </div>
  )
}
