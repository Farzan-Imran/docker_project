import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  if (!Array.isArray(todos)) {
    return <h2>Loading...</h2>;
  }

  if (todos.length === 0) {
    return <p>No Todos Found.</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;

