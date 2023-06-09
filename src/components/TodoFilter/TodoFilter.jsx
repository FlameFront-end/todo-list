import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveFilter } from "../../store/filters/filters-selectors";
import { setFilter } from "../../store/filters/filters-actions";
import s from "./TodoFilter.module.scss";
import { selectVisibleTodos } from "../../store/todos/todos-selectors";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

  return (
    <div className={s.footer}>
      <div className={s.todo_counter}>{todos.length} items left</div>
      <div>
        <button
          onClick={() => {
            dispatch(setFilter("all"));
          }}
          className={`${s.btn} ${activeFilter === "all" ? s.btn_active : ""}`}
        >
          All
        </button>
        <button
          onClick={() => {
            dispatch(setFilter("active"));
          }}
          className={`${s.btn} ${
            activeFilter === "active" ? s.btn_active : ""
          }`}
        >
          Active
        </button>
        <button
          onClick={() => {
            dispatch(setFilter("completed"));
          }}
          className={`${s.btn} ${
            activeFilter === "completed" ? s.btn_active : ""
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
