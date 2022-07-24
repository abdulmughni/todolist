import { combineReducers } from "redux";
import { tasksReducer } from "./tasks";
import { userReducer } from "./user";

const reducersObj = {
  tasksReducer,
  userReducer,
};

export default combineReducers(reducersObj);
