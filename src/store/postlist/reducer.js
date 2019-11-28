const initialState = { posts: null, newPostId: null };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "GET_POST_LIST": {
      return {
        ...state,
        posts: action.payload
      };
    }
    case "NEW_POST": {
      return {
        ...state,
        newPostId: action.payload
      };
    }
    default:
      return state;
  }
}
