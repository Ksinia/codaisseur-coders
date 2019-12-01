import api from "../../api";
import { fetchPost } from "../post/actions";

export function Like(dispatch, getState) {
  const id = getState().postData.post.id;
  const jwt = getState().auth.token;

  api(`/posts/${id}/likes`, { method: "POST", jwt: jwt })
    .then(data => dispatch(sendLike(data)))
    .then(dispatch(fetchPost(id)))
    .catch(err => console.log("err", err));
}

export function sendLike(likestatus) {
  return {
    type: "like/LIKED",
    payload: likestatus
  };
}

export function Dislike(dispatch, getState) {
  const id = getState().postData.post.id;
  const jwt = getState().auth.token;

  api(`/posts/${id}/likes`, {
    method: "DELETE",
    jwt: jwt
  })
    .then(data => console.log("data", data))
    .catch(err => console.log("err", err));
}
