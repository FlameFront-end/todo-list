import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import Header from ".//components/Header/Header";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="todo-container">
        <NewTodo />
        <TodoList />
        <TodoFilter />
      </div>
    </div>
  );
}

export default App;
