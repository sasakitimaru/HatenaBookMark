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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onCreateArticle(filter: $filter) {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle($filter: ModelSubscriptionArticleFilterInput) {
    onUpdateArticle(filter: $filter) {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle($filter: ModelSubscriptionArticleFilterInput) {
    onDeleteArticle(filter: $filter) {
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
