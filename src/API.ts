/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  bookmarks?: ModelBookmarkConnection | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBookmarkConnection = {
  __typename: "ModelBookmarkConnection",
  items:  Array<Bookmark | null >,
  nextToken?: string | null,
};

export type Bookmark = {
  __typename: "Bookmark",
  id: string,
  userId: string,
  articleId: string,
  user?: User | null,
  article?: Article | null,
  createdAt: string,
  updatedAt: string,
};

export type Article = {
  __typename: "Article",
  id: string,
  title: string,
  link: string,
  liked: number,
  comments?: ModelCommentConnection | null,
  bookmarks?: ModelBookmarkConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  userId: string,
  user?: User | null,
  articleId: string,
  article?: Article | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateArticleInput = {
  id?: string | null,
  title: string,
  link: string,
  liked: number,
};

export type ModelArticleConditionInput = {
  title?: ModelStringInput | null,
  link?: ModelStringInput | null,
  liked?: ModelIntInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateArticleInput = {
  id: string,
  title?: string | null,
  link?: string | null,
  liked?: number | null,
};

export type DeleteArticleInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  userId: string,
  articleId: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  articleId?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  userId?: string | null,
  articleId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateBookmarkInput = {
  id?: string | null,
  userId: string,
  articleId: string,
};

export type ModelBookmarkConditionInput = {
  userId?: ModelIDInput | null,
  articleId?: ModelIDInput | null,
  and?: Array< ModelBookmarkConditionInput | null > | null,
  or?: Array< ModelBookmarkConditionInput | null > | null,
  not?: ModelBookmarkConditionInput | null,
};

export type UpdateBookmarkInput = {
  id: string,
  userId?: string | null,
  articleId?: string | null,
};

export type DeleteBookmarkInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  link?: ModelStringInput | null,
  liked?: ModelIntInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type ModelArticleConnection = {
  __typename: "ModelArticleConnection",
  items:  Array<Article | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  articleId?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelBookmarkFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  articleId?: ModelIDInput | null,
  and?: Array< ModelBookmarkFilterInput | null > | null,
  or?: Array< ModelBookmarkFilterInput | null > | null,
  not?: ModelBookmarkFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionArticleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  link?: ModelSubscriptionStringInput | null,
  liked?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionArticleFilterInput | null > | null,
  or?: Array< ModelSubscriptionArticleFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  articleId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionBookmarkFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  articleId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBookmarkFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookmarkFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    link: string,
    liked: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    link: string,
    liked: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    link: string,
    liked: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articleId: string,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articleId: string,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articleId: string,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBookmarkMutationVariables = {
  input: CreateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type CreateBookmarkMutation = {
  createBookmark?:  {
    __typename: "Bookmark",
    id: string,
    userId: string,
    articleId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookmarkMutationVariables = {
  input: UpdateBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type UpdateBookmarkMutation = {
  updateBookmark?:  {
    __typename: "Bookmark",
    id: string,
    userId: string,
    articleId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookmarkMutationVariables = {
  input: DeleteBookmarkInput,
  condition?: ModelBookmarkConditionInput | null,
};

export type DeleteBookmarkMutation = {
  deleteBookmark?:  {
    __typename: "Bookmark",
    id: string,
    userId: string,
    articleId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    link: string,
    liked: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles?:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articleId: string,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articleId: string,
      article?:  {
        __typename: "Article",
        id: string,
        title: string,
        link: string,
        liked: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBookmarkQueryVariables = {
  id: string,
};

export type GetBookmarkQuery = {
  getBookmark?:  {
    __typename: "Bookmark",
    id: string,
    userId: string,
    articleId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBookmarksQueryVariables = {
  filter?: ModelBookmarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBookmarksQuery = {
  listBookmarks?:  {
    __typename: "ModelBookmarkConnection",
    items:  Array< {
      __typename: "Bookmark",
      id: string,
      userId: string,
      articleId: string,
      user?:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      article?:  {
        __typename: "Article",
        id: string,
        title: string,
        link: string,
        liked: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByUserIdAndArticleIdQueryVariables = {
  userId: string,
  articleId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByUserIdAndArticleIdQuery = {
  commentsByUserIdAndArticleId?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articleId: string,
      article?:  {
        __typename: "Article",
        id: string,
        title: string,
        link: string,
        liked: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByArticleIdAndUserIdQueryVariables = {
  articleId: string,
  userId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByArticleIdAndUserIdQuery = {
  commentsByArticleIdAndUserId?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      userId: string,
      user?:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articleId: string,
      article?:  {
        __typename: "Article",
        id: string,
        title: string,
        link: string,
        liked: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BookmarksByUserIdAndArticleIdQueryVariables = {
  userId: string,
  articleId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookmarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookmarksByUserIdAndArticleIdQuery = {
  bookmarksByUserIdAndArticleId?:  {
    __typename: "ModelBookmarkConnection",
    items:  Array< {
      __typename: "Bookmark",
      id: string,
      userId: string,
      articleId: string,
      user?:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      article?:  {
        __typename: "Article",
        id: string,
        title: string,
        link: string,
        liked: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BookmarksByArticleIdAndUserIdQueryVariables = {
  articleId: string,
  userId?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBookmarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BookmarksByArticleIdAndUserIdQuery = {
  bookmarksByArticleIdAndUserId?:  {
    __typename: "ModelBookmarkConnection",
    items:  Array< {
      __typename: "Bookmark",
      id: string,
      userId: string,
      articleId: string,
      user?:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      article?:  {
        __typename: "Article",
        id: string,
        title: string,
        link: string,
        liked: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    link: string,
    liked: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    link: string,
    liked: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscriptionVariables = {
  filter?: ModelSubscriptionArticleFilterInput | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle?:  {
    __typename: "Article",
    id: string,
    title: string,
    link: string,
    liked: number,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    bookmarks?:  {
      __typename: "ModelBookmarkConnection",
      items:  Array< {
        __typename: "Bookmark",
        id: string,
        userId: string,
        articleId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articleId: string,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articleId: string,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    userId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articleId: string,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBookmarkSubscriptionVariables = {
  filter?: ModelSubscriptionBookmarkFilterInput | null,
};

export type OnCreateBookmarkSubscription = {
  onCreateBookmark?:  {
    __typename: "Bookmark",
    id: string,
    userId: string,
    articleId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookmarkSubscriptionVariables = {
  filter?: ModelSubscriptionBookmarkFilterInput | null,
};

export type OnUpdateBookmarkSubscription = {
  onUpdateBookmark?:  {
    __typename: "Bookmark",
    id: string,
    userId: string,
    articleId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookmarkSubscriptionVariables = {
  filter?: ModelSubscriptionBookmarkFilterInput | null,
};

export type OnDeleteBookmarkSubscription = {
  onDeleteBookmark?:  {
    __typename: "Bookmark",
    id: string,
    userId: string,
    articleId: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    article?:  {
      __typename: "Article",
      id: string,
      title: string,
      link: string,
      liked: number,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      bookmarks?:  {
        __typename: "ModelBookmarkConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
