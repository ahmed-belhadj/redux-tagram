function postComments(state = [], action) {
  switch (action.type) {
    case "CREATE_COMMENT":
      return [...state, { user: action.commenter, text: action.comment }];
    case "DELETE_COMMENT":
      return [
        ...state.splice(0, action.comment),
        ...state.splice(action.comment + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
