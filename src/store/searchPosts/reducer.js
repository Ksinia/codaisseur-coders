const initialState = null;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SEARCHED_POSTS": {
      return action.payload;
    }
    default:
      return state;
  }
}
