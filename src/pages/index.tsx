import React, { createContext, useState } from "react";
import Layout from "../components/Global/Layout";
import Article from "../components/Article/Article";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
import BookMark from "@/components/BookMark/BookMark";
import Ranking from "@/components/Ranking/Ranking";
import Loading from "@/components/Loading/Loading";
Amplify.configure(awsExports);

interface Article {
  id: string;
  link: string;
  title: string;
  liked: number;
}
export type CurrentPage = "bookMark" | "ranking";
export const ArticleContext = createContext<{
  articles: Article[];
  setArticles: (articles: Article[] | ((prev: Article[]) => Article[])) => void;
}>({
  articles: [],
  setArticles: () => {},
});
export const CurrentPageContext = createContext<{
  currentPage: CurrentPage;
  setCurrentPage: (currentPage: CurrentPage) => void;
}>({
  currentPage: "ranking",
  setCurrentPage: () => {},
});
const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>("ranking");
  const [articles, setArticles] = useState<Article[]>([]);
  return (
    <Authenticator
      loginMechanisms={["email"]}
      socialProviders={["apple", "facebook", "google"]}
    >
      {({ signOut, user }) => (
        <ArticleContext.Provider value={{ articles, setArticles }}>
          <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
            <main>
              <Layout title={currentPage} signOut={signOut} user={user}>
                {/* <Loading/> */}
                {
                  // loading ? <Loading /> :
                  currentPage === "ranking" ? <Ranking /> : <BookMark />
                }
              </Layout>
            </main>
          </CurrentPageContext.Provider>
        </ArticleContext.Provider>
      )}
    </Authenticator>
  );
};

export default HomePage;
