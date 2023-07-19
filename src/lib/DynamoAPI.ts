import axios from 'axios';

interface AddArticleData {
  id: string;
  title: string;
  link: string;
  liked: number;
}

interface AddCommentData {
  id: string;
  content: string;
  userId: string;
  articleId: string;
}


interface AddBookmarkData {
  id: string;
  userId: string;
  articleId: string;
}


export const addArticle = async (data: AddArticleData) => {
  try {
    const response = await axios.post('/api/addArticle', data);
    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    throw error
  }
}

export const addComment = async (data: AddCommentData) => {
  try {
    const response = await axios.post('/api/addComment', data);
    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    throw error
  }
}

export const addBookMark = async (data: AddBookmarkData) => {
  try {
    const response = await axios.post('/api/addBookMark', data);
    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    throw error
  }
}