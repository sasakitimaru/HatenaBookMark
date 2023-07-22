import { API, graphqlOperation, Auth, Amplify } from "aws-amplify";
import React, { useEffect } from "react";
import { listArticles, listComments } from "../../graphql/queries";
import { Article } from "@/API";
import { GetStaticPaths, GetStaticProps } from "next";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "../../aws-exports";
import Layout from "@/components/Global/Layout";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import styles from "./articles.module.scss";
import Comment from "@/components/Comment/Comment";
Amplify.configure(awsExports);

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: any = await API.graphql(graphqlOperation(listArticles));
  const paths = articles.data.listArticles.items.map((article: Article) => {
    return {
      params: {
        article: article.title,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article: any = await API.graphql(
    graphqlOperation(listArticles, {
      filter: {
        title: {
          // @ts-ignore
          eq: params.article,
        },
      },
    })
  );
  const comments:any = await API.graphql(
    graphqlOperation(listComments, {
      filter: {
        articleId: {
          // @ts-ignore
          eq: article.data.listArticles.items[0].id,
        },
      },
    })
  );
  return {
    props: {
      article: article.data.listArticles.items[0],
      comments: comments.data.listComments.items,
    },
    revalidate: 60 * 60,
  };
};
interface ArticleProps {
  article: Article;
  comments: Comment[];
}
const Article: React.FC<ArticleProps> = ({ article, comments }) => {
  return (
    <Authenticator
    loginMechanisms={["email"]}
      socialProviders={["apple", "facebook", "google"]}
    >
      <Layout title={article.title}>
        <div className={styles['articles-container']}>
          <ArticleCard article={article} />
          <Comment comments={comments}/>
        </div>
      </Layout>
    </Authenticator>
  );
};

export default Article;
