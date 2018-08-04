export function incrementLikes(postId) {
  return {
    type: "INCREMENT_LIKES",
    postId
  };
}

export function createComment(postId, commenter, comment) {
  return {
    type: "CREATE_COMMENT",
    postId,
    commenter,
    comment
  };
}

export function deleteComment(postId, comment) {
  return {
    type: "CREATE_COMMENT",
    postId,
    comment
  };
}
