import { useState } from "react";

function TodoForm({ addTodo }) {

    const [title, setTitle] = useState("");

    const submitHandler = (e) => {

        e.preventDefault();

        if (!title.trim()) return;

        addTodo(title);

        setTitle("");

    };

    return (

        <form onSubmit={submitHandler}>

            <input
                type="text"
                placeholder="Enter Todo..."
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <button>Add</button>

        </form>

    );

}

export default TodoForm;

