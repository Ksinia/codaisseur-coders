import api from "../../api";
import { fetchDevelopers } from "../developers/actions";

export async function searchPosts(searchType, keyword) {
  if (searchType == "author" || searchType == "tag") {
    return function thunk(dispatch, getState) {
      api(`/posts?${searchType}=${keyword}`)
        .then(data => dispatch(searchSucceded(data)))
        .catch(err => console.log("err", err));
    };
  } else if (searchType == "name") {
    return async function thunk(dispatch, getState) {
      let res = [];
      // if (!getState().developers) {
      //   dispatch(fetchDevelopers);
      // }
      await dispatch(fetchDevelopers);
      getState.developers
        .filter(dev => dev.name.toUpperCase() == keyword.toUpperCase())
        .forEach(dev => {
          api(`/posts?author=${dev.id}`)
            .then(data => res.push(data))
            .catch(err => console.log("err", err));
        });
      dispatch(searchSucceded(res));
    };
  }
}
export function searchPostsByAuthor(authorName) {
  return function thunk(dispatch, getState) {
    let res = [];
    if (!getState().developers) {
      dispatch(fetchDevelopers);
    }
    getState.developers
      .filter(dev => dev.name.toUpperCase() == authorName.toUpperCase())
      .forEach(dev => {
        api(`/posts?author=${dev.id}`)
          .then(data => res.push(data))
          .catch(err => console.log("err", err));
      });
    dispatch(searchSucceded(res));
  };
}
export function searchSucceded(searchResult) {
  return {
    type: "SEARCHED_POSTS",
    payload: searchResult
  };
}
