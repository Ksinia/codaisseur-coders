import { combineReducers } from "redux";
import developers from "./developers/reducer";
import post from "./post/reducer";
import postList from "../store/postlist/reducer";
import authReducer from "./auth/reducer";
import likes from "../store/likes/reducer";

export default combineReducers({
  developers,
  postData: post,
  auth: authReducer,
  postList: postList,
  likedness: likes
});
