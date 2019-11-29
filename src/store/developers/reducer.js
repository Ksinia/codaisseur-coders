const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "developers/FETCHED": {
      // => Ask yourself: what is action.payload?
      return { ...state, developers: action.payload };
    }
    case "developers/DEVELOPER": {
      return { ...state, currentDeveloper: action.payload };
    }
    default: {
      return state;
    }
  }
}
