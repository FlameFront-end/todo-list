import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/todos/todos-actions";
import { selectVisibleTodos } from "../../store/todos/todos-selectors";
import { selectActiveFilter } from "../../store/filters/filters-selectors";

import s from "./TodoList.component.scss";

const TodoList = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h2>{todo.title}</h2>
          <input
            type="checkbox"
            checked={todo.completed}
            onClick={() => handleToggle(todo.id)}
          />
          <button onClick={() => handleDelete(todo.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
