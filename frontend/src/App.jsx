import { useEffect, useState } from "react";
import "./App.css";

import API from "./services/api";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await API.get("/api/todos");

      if (Array.isArray(response.data)) {
        setTodos(response.data);
      } else if (Array.isArray(response.data.todos)) {
        setTodos(response.data.todos);
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.error(error);
      setTodos([]);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    try {
      await API.post("/api/todos", { title });
      await fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await API.delete(`/api/todos/${id}`);
      await fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTodo = async (id, completed) => {
    try {
      await API.put(`/api/todos/${id}`, { completed });
      await fetchTodos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Docker Todo App</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
