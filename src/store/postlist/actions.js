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

export function createPost(title, content) {
  return function thunk(dispatch, getState) {
    const jwt = getState().auth.token;
    api("/posts", {
      method: "POST",
      body: {
        title: title,
        content: content
      },
      jwt: jwt
    })
      .then(data => {
        dispatch(newPost(data.id));
        console.log(data.id);
      })
      .catch(err => console.log("err", err));
  };
}

export function newPost(postId) {
  return {
    type: "NEW_POST",
    payload: postId
  };
}
