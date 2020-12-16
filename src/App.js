import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, complete: false, edit: false, text: "mohamed" },
    { id: 0, complete: false, edit: false, text: "aymen" }
  ]);
  // ...todos ==>   "mohamed","aymen",
  // 1111- Define a callback in my parent which takes the data I need in as a parameter.
  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  // 1111
  // todos.filter(el= > el.id !==i)
  // indice=0
  const handleDelete = (indice) => {
    setTodos(todos.filter((el) => el.id !== indice));
  };
  // 11111
  const handleComplete = (idTodo) => {
    setTodos(
      todos.map((el) =>
        el.id === idTodo ? { ...el, complete: !el.complete } : el
      )
    );
  };
  const handleEdit = (idTodo) => {
    setTodos(
      todos.map((el) => (el.id === idTodo ? { ...el, edit: !el.edit } : el))
    );
  };
  const handleSave = (idTodo, newText) => {
    setTodos(
      todos.map((el) =>
        el.id === idTodo ? { ...el, text: newText, edit: !el.edit } : el
      )
    );
  };
  return (
    <div className="App">
      {/* 222: Pass that callback as a prop to the child (see above).
       */}
      <AddTodo handleAdd={handleAdd} />

      <TodoList
        todos={todos}
        // {/* 22222 */}
        handleDelete={handleDelete}
        // 22222
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
    </div>
  );
}

