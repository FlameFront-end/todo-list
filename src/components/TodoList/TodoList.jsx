import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from '../../store'
import s from './TodoList.component.scss'

const TodoList = () => {
	const todos = useSelector(state => state)
	const dispatch = useDispatch()

	const handleDelete = id => {
		dispatch(removeTodo(id))
	}

	const handleToggle = id => {
		dispatch(toggleTodo(id))
	}

	return (
		<ul>
			{todos.map(todo => (
				<li key={todo.id}>
					<h2>{todo.title}</h2>
					<input type='checkbox' onClick={() => handleToggle(todo.id)} />
					<button onClick={() => handleDelete(todo.id)}>Удалить</button>
				</li>
			))}
		</ul>
	)
}

export default TodoList
