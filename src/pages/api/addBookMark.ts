import { API, graphqlOperation } from "aws-amplify";
import { createBookmark } from "@/graphql/mutations";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import Observable from "zen-observable-ts";
import awsExports from "@/aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure({ ...awsExports, ssr: true });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  req: { body: any },
  res: {
    json: (
      arg0: GraphQLResult<any> | Observable<object> | { error: string }
    ) => void;
  }
) => {
  try {
    const data = req.body;
    const newBookmark = await API.graphql(
      graphqlOperation(createBookmark, { input: data })
    );
    res.json(newBookmark);
  } catch (err) {
    console.error("Error adding bookmark:", err);
    res.json({ error: "Error adding bookmark" });
  }
};
