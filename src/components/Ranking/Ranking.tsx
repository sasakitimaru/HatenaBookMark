import React, { createContext, useContext, useEffect, useState } from "react";
import Article from "../Article/Article";
import styles from "./Ranking.module.scss";
import { API, graphqlOperation, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { listArticles } from "@/graphql/queries";
import Pagination from "@mui/material/Pagination";
import Loading from "../Loading/Loading";

interface Article {
  id: string;
  link: string;
  title: string;
  liked: number;
}
export const ArticleContext = createContext<{
  articles: Article[];
  setArticles: (articles: Article[] | ((prev: Article[]) => Article[])) => void;
}>({
  articles: [],
  setArticles: () => {},
});
const Ranking = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [sumPageNum, setSumPageNum] = useState<number>(1);
  const [slicedArticles, setSlicedArticles] = useState<Article[]>([]);
  const getArticles = async () => {
    setLoading(true);
    const response: any = await API.graphql(graphqlOperation(listArticles));
    const sortedData = response.data.listArticles.items.sort(
      (a: Article, b: Article) => {
        return b.liked - a.liked;
      }
    );
    setSumPageNum(Math.ceil(sortedData.length / 6));
    setLoading(false);
    const items = sortedData;
    items.length !== 0
      ? items.map((item: Article) => {
          setArticles((prev) => [
            ...prev,
            {
              id: item.id,
              title: item.title,
              link: item.link,
              liked: item.liked,
            },
          ]);
        })
      : setArticles([]);
  };
  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    const startIndex = (currentPageNum - 1) * 6;
    const endIndex = startIndex + 6;
    setSlicedArticles(articles.slice(startIndex, endIndex));
  }, [articles,currentPageNum]);
  return (
    <div className={styles["container"]}>
      <h2>👑ランキング👑</h2>
      {loading ? (
        <Loading />
      ) : articles.length === 0 ? (
        <p>ブックマークはありません。+マークから記事を追加しよう！</p>
      ) : (
        slicedArticles.map((article, index) => (
          <div key={index} style={{ width: "100%" }}>
            <Article
              link={article.link}
              title={article.title}
              liked={article.liked}
            />
          </div>
        ))
      )}
      <Pagination
        count={sumPageNum}
        onChange={(e, page) => setCurrentPageNum(page)}
      />
    </div>
  );
};

export default Ranking;
