import { combineReducers } from "redux";
import developers from "./developers/reducer";
import post from "./post/reducer";
import authReducer from "./login/reducer";
import postList from "../store/postlist/reducer";
export default combineReducers({
  developers,
  postData: post,
  auth: authReducer,
  postList: postList
});
