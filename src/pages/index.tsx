import React from 'react'
import Layout from '../components/Global/Layout'
import Article from '../components/Article/Article'
interface Article {
  link: string
  title: string
  liked: number
}
const page = () => {
  const articles: Article[] = [
    {
      link: "https://example.com/article1",
      title: "Article 1",
      liked: 10
    },
    {
      link: "https://example.com/article2",
      title: "Article 2",
      liked: 15
    },
    {
      link: "https://example.com/article3",
      title: "Article 3",
      liked: 20
    },
    {
      link: "https://example.com/article4",
      title: "Article 4",
      liked: 25
    },
    {
      link: "https://example.com/article5",
      title: "Article 5",
      liked: 30
    }
  ];

  return (
    <Layout>
      {articles.map((article, index) => (
        <div key={index}>
          <Article
            link={article.link}
            title={article.title}
            liked={article.liked}
          />
        </div>
      ))}
    </Layout>
  )
}

export default page