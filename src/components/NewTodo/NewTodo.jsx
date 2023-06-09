import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./NewTodo.module.scss";
import { addTodo } from "../../store/todos/todos-actions";

const NewTodo = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskTitle = e.target.title.value.trim();
    if (taskTitle === "") {
      setError(true);
    } else {
      dispatch(addTodo(taskTitle));
      e.target.title.value = "";
      setError(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className={s.input}
          placeholder="What needs to be done?"
        />
      </form>
      {error && (
        <span className={s.err}>Please enter the name of the task!</span>
      )}
    </>
  );
};

export default NewTodo;
