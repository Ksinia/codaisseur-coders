const initialState = null;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "GET_POST_LIST": {
      return {
        ...state,
        posts: action.payload
      };
    }

    default:
      return state;
  }
}
