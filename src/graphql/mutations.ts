/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createBookmark = /* GraphQL */ `
  mutation CreateBookmark(
    $input: CreateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    createBookmark(input: $input, condition: $condition) {
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
export const updateBookmark = /* GraphQL */ `
  mutation UpdateBookmark(
    $input: UpdateBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    updateBookmark(input: $input, condition: $condition) {
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
export const deleteBookmark = /* GraphQL */ `
  mutation DeleteBookmark(
    $input: DeleteBookmarkInput!
    $condition: ModelBookmarkConditionInput
  ) {
    deleteBookmark(input: $input, condition: $condition) {
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
