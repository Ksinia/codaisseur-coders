const initialState = { post: null, comments: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "post/FETCHED": {
      return {
        ...state,
        post: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
