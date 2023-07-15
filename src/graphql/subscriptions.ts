/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      email
      bookmarks {
        items {
          id
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
          id
          content
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      email
      bookmarks {
        items {
          id
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
          id
          content
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      email
      bookmarks {
        items {
          id
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
          id
          content
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onCreateArticle(filter: $filter) {
      id
      title
      link
      comments {
        items {
          id
          content
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookmarks {
        items {
          id
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onUpdateArticle(filter: $filter) {
      id
      title
      link
      comments {
        items {
          id
          content
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookmarks {
        items {
          id
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
    onDeleteArticle(filter: $filter) {
      id
      title
      link
      comments {
        items {
          id
          content
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      bookmarks {
        items {
          id
          userId
          articleId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      content
      userId
      user {
        id
        email
        bookmarks {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      articleId
      article {
        id
        title
        link
        comments {
          nextToken
          __typename
        }
        bookmarks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      content
      userId
      user {
        id
        email
        bookmarks {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      articleId
      article {
        id
        title
        link
        comments {
          nextToken
          __typename
        }
        bookmarks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      content
      userId
      user {
        id
        email
        bookmarks {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      articleId
      article {
        id
        title
        link
        comments {
          nextToken
          __typename
        }
        bookmarks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBookmark = /* GraphQL */ `
  subscription OnCreateBookmark($filter: ModelSubscriptionBookmarkFilterInput) {
    onCreateBookmark(filter: $filter) {
      id
      userId
      articleId
      user {
        id
        email
        bookmarks {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      article {
        id
        title
        link
        comments {
          nextToken
          __typename
        }
        bookmarks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBookmark = /* GraphQL */ `
  subscription OnUpdateBookmark($filter: ModelSubscriptionBookmarkFilterInput) {
    onUpdateBookmark(filter: $filter) {
      id
      userId
      articleId
      user {
        id
        email
        bookmarks {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      article {
        id
        title
        link
        comments {
          nextToken
          __typename
        }
        bookmarks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBookmark = /* GraphQL */ `
  subscription OnDeleteBookmark($filter: ModelSubscriptionBookmarkFilterInput) {
    onDeleteBookmark(filter: $filter) {
      id
      userId
      articleId
      user {
        id
        email
        bookmarks {
          nextToken
          __typename
        }
        comments {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      article {
        id
        title
        link
        comments {
          nextToken
          __typename
        }
        bookmarks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
