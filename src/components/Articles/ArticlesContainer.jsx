import { ArticleCard } from './ArticleCard'

export function ArticlesContainer ({ articles }) {
  return (
        <section className='article-cards-container'>

                    {articles && (
                      articles.map(article => (
                        <ArticleCard key={article.index}
                        date={article.date}
                        userImg={ article.userImg }
                        userName={article.userName}
                        userAt={article.userAt}
                        title={article.title}
                        img={article.img}
                        text={article.text}
                        content={article.content}
                        url={article.url} />
                      ))
                    )}

        </section>
  )
}
