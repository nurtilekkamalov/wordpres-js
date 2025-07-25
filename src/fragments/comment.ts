import { gql } from "@apollo/client";

export const NcmazFcCommentFullFields = gql(/* GraphQL */ `
  fragment NcmazFcCommentFullFields on Comment {
    id
    content
    date
    approved
    parentId
    databaseId
    author {
      node {
        id
        name
        email
        url
        avatar {
          url
        }
      }
    }
    replies {
      nodes {
        id
        content
        date
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  }
`);
