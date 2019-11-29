const initialState = { post: null, comments: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/FETCHED": {
      return {
        ...state,
        post: action.payload
      };
    }
    case "comments/FETCHED": {
      return {
        ...state,
        comments: action.payload
      };
    }
    case "comments/COMMENT_SUBMITED": {
      return {
        ...state,
        comments: {
          ...state.comments,
          count: state.comments.count + 1,
          rows: [{ ...action.payload }, ...state.comments.rows] //remember this method of adding things to the beginning of the array
        }
      };
    }
    default: {
      return state;
    }
  }
}
