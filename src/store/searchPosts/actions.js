import api from "../../api";

export function searchPosts(searchType, keyword) {
  return function thunk(dispatch, getState) {
    api(`/posts?${searchType}=${keyword}`)
      .then(data => dispatch(searchSucceded(data)))
      .catch(err => console.log("err", err));
  };
}
export function searchSucceded(searchResult) {
  return {
    type: "SEARCHED_POSTS",
    payload: searchResult
  };
}
