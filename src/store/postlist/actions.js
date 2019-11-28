import api from "../../api";

export function fetchPosts(dispatch) {
  api(`/posts?offset=1&limit=100`)
    .then(posts => dispatch(setPosts(posts)))
    .catch(err => console.log("err", err));
}

export function setPosts(posts) {
  return {
    type: "GET_POST_LIST",
    payload: posts
  };
}
