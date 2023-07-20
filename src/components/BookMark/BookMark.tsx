import React, { createContext, useEffect, useState, useContext } from "react";
import Article from "../Article/Article";
import styles from "./BookMark.module.scss";
import { API, graphqlOperation, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { bookmarksByUserIdAndArticleId } from "@/graphql/queries";
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
const BookMark = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [sumPageNum, setSumPageNum] = useState<number>(1);
  const [slicedArticles, setSlicedArticles] = useState<Article[]>([]);
  const getArticles = async () => {
    setLoading(true);
    const user = await Auth.currentAuthenticatedUser();
    const response: any = await API.graphql(
      graphqlOperation(bookmarksByUserIdAndArticleId, {
        userId: user.attributes.email,
      })
    );
    setLoading(false);
    // console.log('res1:',response.data.bookmarksByUserIdAndArticleId.items);
    const items = response.data.bookmarksByUserIdAndArticleId.items;
    // console.log(items);
    setSumPageNum(Math.ceil(items.length / 6));
    items.length !== 0
      ? items.map((item: { article: Article }) => {
          setArticles((prev) => [
            ...prev,
            {
              id: item.article.id,
              title: item.article.title,
              link: item.article.link,
              liked: item.article.liked,
            },
          ]);
        })
      : setArticles([]);
    // return response.data.bookmarksByUserIdAndArticleId.items;
  };
  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    const startIndex = (currentPageNum - 1) * 6;
    const endIndex = startIndex + 6;
    setSlicedArticles(articles.slice(startIndex, endIndex));
  }, [currentPageNum, articles]);
  return (
    <div className={styles["container"]}>
        <h2>✔︎ブックマーク</h2>
      {loading ? (
        <Loading />
      ) : articles.length === 0 ? (
        <p>ブックマークはありません。+マークから記事を追加しよう！</p>
      ) : (
        articles.map((article, index) => (
          <div key={index} style={{ width: "100%" }}>
            <Article
              link={article.link}
              title={article.title}
              liked={article.liked} //仮置き
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

export default BookMark;
