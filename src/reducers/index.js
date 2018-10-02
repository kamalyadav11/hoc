import { combineReducers } from "redux";
import commentReducer from "./commentReducer";
import authReducer from "./authReducer";

export default combineReducers({
  comments: commentReducer,
  auth: authReducer
});
