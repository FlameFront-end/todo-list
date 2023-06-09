import NewTodo from './components/NewTodo/NewTodo'
import TodoList from './components/TodoList/TodoList'
import Header from './/components/Header/Header'
import './app.scss'

function App() {
	return (
		<div className='app'>
			<Header />
			<NewTodo />
			<TodoList />
		</div>
	)
}

export default App
