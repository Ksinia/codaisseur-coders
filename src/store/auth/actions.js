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

export function signUp(name, email, password) {
  return function thunk(dispatch, getState) {
    api("/signup", {
      method: "POST",
      body: {
        name: name,
        email: email,
        password: password
      }
    })
      .then(data => {
        api("/me", { jwt: data.jwt })
          .then(profile => {
            dispatch(userLoggedIn(data.jwt, profile));
          })
          .catch(err => console.log("err", err));

        dispatch(saveAccessToken(data.jwt));
      })
      .catch(err => console.log("err", err));
  };
}

export function logOut() {
  return {
    type: "auth/LOG_OUT"
  };
}

export function deleteAccount(dispatch, getState) {
  const id = getState().auth.profile.id;
  const jwt = getState().auth.token;
  api(`/developers/${id}`, {
    method: "DELETE",
    jwt: jwt
  })
    .then(dispatch(logOut()))
    .catch(err => console.log("err", err));
}

export function changeAccount(changedValue, changedItem) {
  return function thunk(dispatch, getState) {
    const id = getState().auth.profile.id;
    const jwt = getState().auth.token;

    api(`/developers/${id}`, {
      method: "PUT",
      body: {
        [changedItem]: changedValue
      },
      jwt: jwt
    })
      .then(data => dispatch(userLoggedIn(jwt, data)))
      .catch(err => console.log("err", err));
  };
}
