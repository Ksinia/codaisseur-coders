import api from "../../api";

function developersFetched(data) {
  console.log("this should happen third");
  return {
    type: "developers/FETCHED",
    payload: data
  };
}
export function fetchDevelopers(dispatch, getState) {
  api("/developers").then(data => {
    // note: just `dispatch` here now
    console.log("this should happen second");
    dispatch(developersFetched(data));
  });
}
