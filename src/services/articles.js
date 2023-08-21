const URL = 'https://newsapi.org/v2/everything'
const API_KEY = 'b3ba7eb9d10a411a848de60cb5f63bd5'

export const findArticles = async ({search}) => {

    if(search == '') return null

    try{
        const res = await fetch(`${URL}?q=${search}&apiKey=${API_KEY}`)
        const data = await res.json()

        const articles = data.articles

        return articles?.map(article => ({
            id: article.index,
            date: article.publishedAt,
            userAt: article.author,
            userImg: '',
            userName: article.author,
            title: article.title,
            img: article.urlToImage,
            text: article.description,
            content: article.content,
            url: article.url
        }))
    } catch(e){
        throw new Error('No articles found')
    }
}
