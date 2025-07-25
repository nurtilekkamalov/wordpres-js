export const QUERY_MUTATION_CREATE_COMMENT = gql(/* GraphQL */ `
  mutation MutationCreateComment(
    $author: String = null
    $parent: ID = null
    $status: CommentStatusEnum = APPROVE
    $content: String = null
    $commentOn: Int = null
    $authorEmail: String = null
    $authorUrl: String = null
  ) {
    createComment(
      input: {
        author: $author
        status: $status
        parent: $parent
        content: $content
        commentOn: $commentOn
        authorEmail: $authorEmail
        authorUrl: $authorUrl
      }
    ) {
      clientMutationId
      success
      comment {
        ...NcmazFcCommentFullFields
      }
    }
  }
`);
