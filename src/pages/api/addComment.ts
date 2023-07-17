import { API, graphqlOperation } from 'aws-amplify';
import { createComment } from '@/graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import Observable from 'zen-observable-ts';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: { body: any; }, res: { json: (arg0: GraphQLResult<any> | Observable<object> | {error: string}) => void; }) => {
  try {
    const data = req.body;
    const newComment = await API.graphql(graphqlOperation(createComment, { input: data }));
    res.json(newComment);
  } catch (err) {
    console.error('Error adding comment:', err);
    res.json({ error: 'Error adding comment' });
  }
};