import React, { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ItemsContainer from "./components/ItemsContainer";
import Count from "./components/Count";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (itemTodeDeleted) => {
    const filteredTodo = todos.filter((item) => item !== itemTodeDeleted);
    setTodos(filteredTodo);
  };

  return (
    <div className="App">
      <h1>My ToDo</h1>
      <Count itemsCount={todos.length} />
      <InputContainer addNewTodo={addNewTodo} />
      <ItemsContainer todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}



// npm start