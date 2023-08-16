const URL = 'https://newsapi.org/v2/everything'
const API_KEY = 'b3ba7eb9d10a411a848de60cb5f63bd5'

export const findArticles = async () => {

    try{
        const res = await fetch(`${URL}?domains=techcrunch.com,thenextweb.com&apiKey=${API_KEY}`)
        const data = await res.json()

        return data
    } catch(e){
        throw new Error('No articles found')
    }
}