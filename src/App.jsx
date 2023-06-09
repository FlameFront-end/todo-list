import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import Header from ".//components/Header/Header";
import "./app.scss";
import TodoFilter from "./components/TodoFilter/TodoFilter";

function App() {
  return (
    <div className="app">
      <Header />
      <TodoFilter />
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
