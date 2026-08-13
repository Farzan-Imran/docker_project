function TodoItem({ todo, deleteTodo, toggleTodo }) {

    return (

        <div className="todo-card">

            <div>

                <h3
                    style={{
                        textDecoration: todo.completed
                            ? "line-through"
                            : "none"
                    }}
                >
                    {todo.title}
                </h3>

            </div>

            <div>

                <button
                    onClick={() => toggleTodo(todo._id, !todo.completed)}
                >
                    {todo.completed ? "Undo" : "Complete"}
                </button>

                <button
                    onClick={() => deleteTodo(todo._id)}
                >
                    Delete
                </button>

            </div>

        </div>

    );

}

export default TodoItem;

