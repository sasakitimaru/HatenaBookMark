import React, { createContext, useEffect, useState } from "react";
import Layout from "../components/Global/Layout";
import Article from "../components/Article/Article";
import { API, Amplify, graphqlOperation, Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports";
import { bookmarksByUserIdAndArticleId } from "@/graphql/queries";
Amplify.configure(awsExports);

interface Article {
  id: string;
  link: string;
  title: string;
}
export const ArticleContext = createContext<{
  articles: Article[];
  setArticles: (articles: Article[] | ((prev: Article[]) => Article[])) => void;
}>({
  articles: [],
  setArticles: () => {},
});
const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const response: any = await API.graphql(
        graphqlOperation(bookmarksByUserIdAndArticleId, {
          userId: user.attributes.email,
        })
      );
      // console.log('res1:',response.data.bookmarksByUserIdAndArticleId.items);
      const items = response.data.bookmarksByUserIdAndArticleId.items;
      items.map((item: { article: Article }) => {
        setArticles((prev) => [
          ...prev,
          {
            id: item.article.id,
            title: item.article.title,
            link: item.article.link,
          },
        ]);
      });
      // return response.data.bookmarksByUserIdAndArticleId.items;
    };
    getArticles();
  }, []);
  return (
    <Authenticator
      loginMechanisms={["email"]}
      socialProviders={["apple", "facebook", "google"]}
    >
      {({ signOut, user }) => (
        <ArticleContext.Provider value={{ articles, setArticles }}>
          <Layout signOut={signOut} user={user}>
            {articles.map((article, index) => (
              <div key={index}>
                <Article
                  link={article.link}
                  title={article.title}
                  liked={10} //仮置き
                />
              </div>
            ))}
          </Layout>
        </ArticleContext.Provider>
      )}
    </Authenticator>
  );
};

export default HomePage;
