import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../../store/todos/todos-actions";
import { selectVisibleTodos } from "../../store/todos/todos-selectors";
import { selectActiveFilter } from "../../store/filters/filters-selectors";

import s from "./TodoList.module.scss";

const TodoList = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={s.todo}>
          <input
            className={s.inp_cbx}
            id={`cbx-${todo.id}`}
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <label className={s.cbx} htmlFor={`cbx-${todo.id}`}>
            <span>
              <svg
                width="12px"
                height="9px"
                viewBox="0 0 12 9"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggle(todo.id);
                }}
              >
                <polyline points="1 5 4 8 11 1"></polyline>
              </svg>
            </span>
            <span>{todo.title}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
