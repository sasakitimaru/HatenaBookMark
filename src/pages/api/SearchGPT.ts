import { API, graphqlOperation } from "aws-amplify";
import { listArticles } from "@/graphql/queries";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  req: { body: any },
  res: { json: (arg0: any) => void }
) => {
  const apiKey = process.env.YOUR_API_KEY;
  const message = req.body.text;
  const messages = [
    {
      role: "user",
      content: `search the articles related to this word with given function: ${message}`,
    },
  ];
  const functions = [
    {
      name: "search_article",
      description: "search the articles with given word",
      parameters: {
        type: "object",
        properties: {
          text: {
            type: "string",
            description: "the word to search",
          },
        },
      },
    },
  ];
  const url = `https://api.openai.com/v1/chat/completions`;

  const data = {
    model: "gpt-3.5-turbo-0613",
    messages,
    functions,
    function_call: "auto",
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const get_related_articles = async () => {
    try {
      const response = await axios.post(url, data, { headers });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const search_article = async () => {
    try {
      const data = req.body;
      const listArticlesData: any = await API.graphql(
        graphqlOperation(listArticles)
      );
      const titles = listArticlesData.data.listArticles.items.map(
        (item: { title: string }) => item.title
      );
      return titles;
    } catch (err) {
      console.error("Error search article:", err);
      res.json({ error: `Error search article` });
    }
  };

  const response: any = await get_related_articles();
  if (response.data.choices[0].message.function_call) {
    const functionName = response.data.choices[0].message.function_call.name;
    const args = JSON.parse(
      response.data.choices[0].message.function_call.arguments
    );
    const function_response = JSON.stringify(await search_article());
    console.log(response.data.choices[0].message)
    const _messages = [
      {
        role: "user",
        content: `search the articles related to this word with given response: ${message}. After that respond the titles which match the word, then you have to say only titles like this examples: ['title1', 'title2']. But if you think there are no articles related to this word, you can say 'Not found'`,
      },
      response.data.choices[0].message,
      {
        role: "function",
        name: functionName,
        content: function_response,
      },
    ];
    const _data = {
      model: "gpt-3.5-turbo-0613",
      messages: _messages,
    };
    try {
      const second_response = await axios.post(url, _data, { headers });
      res.json(second_response.data);
    } catch (error) {
      console.error("function_call error: ",error);
      return error;
    }
  } else {
    res.json(response.data);
  }
};
