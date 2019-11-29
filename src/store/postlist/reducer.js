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
    case "POST_DELETED": {
      return {
        ...state,
        posts: {
          count: state.posts.count - 1,
          rows: state.posts.rows.filter(row => row.id !== action.payload)
        }
      };
    }
    default:
      return state;
  }
}
