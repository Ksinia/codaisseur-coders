import api from "../../api";
// We're going to use a thunk (action) to do the data fetching
// and the resulting normal action dispatch.
// However, which specific API call make depends on the
// ID of the developer we want to fetch.
// So we're going to make a "thunk (action) creator",
//similar to how we made a "action creator" earlier.
export function fetchPost(id) {
  return function thunk(dispatch) {
    api(`/posts/${id}`).then(post => {
      dispatch(setPost(post));
    });
  };
}

//action creator
export function setPost(post) {
  return {
    type: "post/FETCHED",
    payload: post
  };
}
