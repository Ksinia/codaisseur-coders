const initialState = {
  accessToken: null,
  profile: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "auth/USER_LOGGED_IN": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    case "auth/LOG_OUT": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
