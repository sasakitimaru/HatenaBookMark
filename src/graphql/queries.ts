/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      bookmarks {
        items {
          id
          userId
          articleId
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          userId
          articleId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        bookmarks {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      link
      liked
      comments {
        items {
          id
          content
          userId
          articleId
          createdAt
          updatedAt
        }
        nextToken
      }
      bookmarks {
        items {
          id
          userId
          articleId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        link
        liked
        comments {
          nextToken
        }
        bookmarks {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      userId
      user {
        id
        email
        bookmarks {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      articleId
      article {
        id
        title
        link
        liked
        comments {
          nextToken
        }
        bookmarks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        userId
        user {
          id
          email
          createdAt
          updatedAt
        }
        articleId
        article {
          id
          title
          link
          liked
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBookmark = /* GraphQL */ `
  query GetBookmark($id: ID!) {
    getBookmark(id: $id) {
      id
      userId
      articleId
      user {
        id
        email
        bookmarks {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      article {
        id
        title
        link
        liked
        comments {
          nextToken
        }
        bookmarks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBookmarks = /* GraphQL */ `
  query ListBookmarks(
    $filter: ModelBookmarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        articleId
        user {
          id
          email
          createdAt
          updatedAt
        }
        article {
          id
          title
          link
          liked
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByUserIdAndArticleId = /* GraphQL */ `
  query CommentsByUserIdAndArticleId(
    $userId: ID!
    $articleId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserIdAndArticleId(
      userId: $userId
      articleId: $articleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        userId
        user {
          id
          email
          createdAt
          updatedAt
        }
        articleId
        article {
          id
          title
          link
          liked
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const commentsByArticleIdAndUserId = /* GraphQL */ `
  query CommentsByArticleIdAndUserId(
    $articleId: ID!
    $userId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByArticleIdAndUserId(
      articleId: $articleId
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        userId
        user {
          id
          email
          createdAt
          updatedAt
        }
        articleId
        article {
          id
          title
          link
          liked
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const bookmarksByUserIdAndArticleId = /* GraphQL */ `
  query BookmarksByUserIdAndArticleId(
    $userId: ID!
    $articleId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookmarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookmarksByUserIdAndArticleId(
      userId: $userId
      articleId: $articleId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        articleId
        user {
          id
          email
          createdAt
          updatedAt
        }
        article {
          id
          title
          link
          liked
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const bookmarksByArticleIdAndUserId = /* GraphQL */ `
  query BookmarksByArticleIdAndUserId(
    $articleId: ID!
    $userId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookmarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookmarksByArticleIdAndUserId(
      articleId: $articleId
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        articleId
        user {
          id
          email
          createdAt
          updatedAt
        }
        article {
          id
          title
          link
          liked
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
