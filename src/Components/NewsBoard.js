import NewsItem from "./NewsItem"
import {useState} from "react"
import {useEffect} from "react"

const NewsBoard = ({category}) => {
      const [articles, setArticles] = useState([])

      useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2d6098c63f814bc0ac71e8b8864ad131`  
        fetch(url).then(response=> response.json().then(data=>setArticles(data.articles)))
      },[category])

  return (
    <div>
      <h2 className='text-center mt-2 mb-3'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news, index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
