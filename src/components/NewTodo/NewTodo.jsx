import React from "react";
import { useDispatch } from "react-redux";
import s from "./NewTodo.module.scss";
import { addTodo } from "../../store/todos/todos-actions";

const NewTodo = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Введите название" />
      <input type="submit" value="Создать" />
    </form>
  );
};

export default NewTodo;
