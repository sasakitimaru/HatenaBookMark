import { API, graphqlOperation } from 'aws-amplify';
import { createArticle } from '@/graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import Observable from 'zen-observable-ts';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: { body: any; }, res: { json: (arg0: GraphQLResult<any> | Observable<object> | {error: string}) => void; }) => {
  try {
    const data = req.body;
    console.log(data);
    const newArticle = await API.graphql(graphqlOperation(createArticle, { input: data }));
    res.json(newArticle);
  } catch (err) {
    console.error('Error adding article:', err);
    res.json({ error: `Error adding article`});
  }
};