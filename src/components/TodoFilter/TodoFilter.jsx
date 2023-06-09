import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveFilter } from "../../store/filters/filters-selectors";
import { setFilter } from "../../store/filters/filters-actions";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(setFilter("all"));
        }}
        style={{ color: activeFilter === "all" ? "red" : "black" }}
      >
        Все
      </button>
      <button
        onClick={() => {
          dispatch(setFilter("active"));
        }}
        style={{ color: activeFilter === "active" ? "red" : "black" }}
      >
        Активные
      </button>
      <button
        onClick={() => {
          dispatch(setFilter("completed"));
        }}
        style={{ color: activeFilter === "completed" ? "red" : "black" }}
      >
        Завершённые
      </button>
    </div>
  );
};

export default TodoFilter;
