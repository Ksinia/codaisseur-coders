import api from "../../api";

//action creator
function developersFetched(data) {
  console.log("this should happen third");
  return {
    type: "developers/FETCHED",
    payload: data
  };
}

//thunk
export function fetchDevelopers(dispatch, getState) {
  api("/developers?limit=100").then(data => {
    // note: just `dispatch` here now
    console.log("this should happen second");
    dispatch(developersFetched(data));
  });
}

export function fetchDeveloper(id) {
  return function thunk(dispatch, getState) {
    api(`/developers/${id}`)
      .then(currentDeveloper => dispatch(sendDeveloper(currentDeveloper)))
      .catch(err => console.log("err", err));
  };
}

export function sendDeveloper(developer) {
  return {
    type: "developers/DEVELOPER",
    payload: developer
  };
}

export function clearCurrentDeveloper() {
  return {
    type: "developers/CLEAR_CURRENT_DEVELOPER"
  };
}
