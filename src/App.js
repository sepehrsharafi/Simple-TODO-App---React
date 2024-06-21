import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Daily TODO List</h1>
      <div className="add-todo">
        <button onClick={addTodo}>Add</button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new Task"
        />
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
