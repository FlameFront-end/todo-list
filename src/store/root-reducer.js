import { combineReducers } from "redux";
import { todos } from "./todos/todos-reducers";
import { filters } from "./filters/filters-reducers";

export const rootReducer = combineReducers({
  todos,
  filters,
});
