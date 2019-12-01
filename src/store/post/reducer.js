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
    case "post/CLEAR": {
      return {
        initialState
      };
    }
    case "comments/COMMENT_DELETED": {
      console.log("action.payload", action.payload);
      console.log("state.comments.rows", state.comments.rows);

      return {
        ...state,
        comments: {
          //   ...state.comments,
          count: state.comments.count - 1,
          rows: state.comments.rows.filter(row => row.id !== action.payload)
        }
      };
    }
    default: {
      return state;
    }
  }
}
