import api from "../../api";

// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function

  return function thunk(dispatch, getState) {
    // TODO:
    // (1) make a POST API request to `/login`
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        api("/me", { jwt: data.jwt })
          .then(profile => {
            console.log("profile", profile);
            dispatch(userLoggedIn(data.jwt, profile));
          })
          .catch(err => console.log("err", err));

        dispatch(saveAccessToken(data.jwt));
      })
      .catch(err => console.log("err", err));
    // (2) after getting back the access token,
    //      dispatch the `saveAccessToken` action
  };
}

// An action creator
export function saveAccessToken(accessToken) {
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: accessToken
  };
}
// An action creator
export function userLoggedIn(token, profile) {
  return {
    type: "auth/USER_LOGGED_IN",
    payload: { token, profile }
  };
}
