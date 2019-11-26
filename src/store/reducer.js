import { combineReducers } from "redux";
import developers from "./developers/reducer";
import post from "./post/reducer";

export default combineReducers({
  developers,
  postData: post
});
