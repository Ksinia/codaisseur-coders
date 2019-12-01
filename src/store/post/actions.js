import api from "../../api";
// We're going to use a thunk (action) to do the data fetching
// and the resulting normal action dispatch.
// However, which specific API call make depends on the
// ID of the developer we want to fetch.
// So we're going to make a "thunk (action) creator",
//similar to how we made a "action creator" earlier.
export function fetchPost(id) {
  // dispatching 1 thunk
  // thunk can dispatch multiple 'simple' actions
  return function thunk(dispatch) {
    dispatch({ type: "APP_LOADING" });

    api(`/posts/${id}`).then(post => {
      dispatch(setPost(post));
      dispatch({ type: "APP_DONE_LOADING" });
    });
    api(`/posts/${id}/comments`).then(comments => {
      dispatch(setComments(comments));
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
//action creator
export function setComments(comments) {
  return {
    type: "comments/FETCHED",
    payload: comments
  };
}

export function submitComment(commentText, postId) {
  return function thunk(dispatch, getState) {
    const jwt = getState().auth.token;
    console.log("inside submit comment thunk", postId);
    api(`/posts/${postId}/comments`, {
      method: "POST",
      body: {
        text: commentText
      },
      jwt: jwt
    })
      .then(data => dispatch(commentSubmited(data, postId)))
      .catch(err => console.log("err", err));
  };
}

export function commentSubmited(comment) {
  return {
    type: "comments/COMMENT_SUBMITED",
    payload: comment
  };
}

export function clearPostandComments() {
  return {
    type: "post/CLEAR"
  };
}

export function deleteComment(postId, commentId) {
  return function thunk(dispatch, getState) {
    const jwt = getState().auth.token;
    console.log("We need api endpoint for deleting a comment");
    dispatch(commentDeleted(commentId));
  };
}
export function commentDeleted(commentId) {
  return {
    type: "comments/COMMENT_DELETED",
    payload: commentId
  };
}
