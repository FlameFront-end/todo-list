import { combineReducers } from "redux";
import { todos } from "./todos/todos-reducers";

export const rootReducer = combineReducers({
  todos,
});
