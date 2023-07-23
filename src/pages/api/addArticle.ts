import { API, graphqlOperation } from "aws-amplify";
import { createArticle, updateArticle } from "@/graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import Observable from "zen-observable-ts";
import { getArticle } from "@/graphql/queries";
import awsExports from "@/aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure({ ...awsExports, ssr: true });
// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  req: { body: any },
  res: {
    json: (
      arg0:
        | GraphQLResult<any>
        | Observable<object>
        | { error: string }
        | { message: string }
    ) => void;
  }
) => {
  try {
    const data = req.body;
    console.log(data);
    const check_exist_article: any = await API.graphql(
      graphqlOperation(getArticle, { id: data.id })
    );
    if (check_exist_article.data.getArticle) {
      const input = {
        id: data.id,
        liked: data.liked,
      };
      await API.graphql(graphqlOperation(updateArticle, { input }));
      res.json({ message: "update success" });
    } else {
      const newArticle = await API.graphql(
        graphqlOperation(createArticle, { input: data })
      );
      res.json(newArticle);
    }
  } catch (err) {
    console.error("Error adding article:", err);
    res.json({ error: `Error adding article` });
  }
};
