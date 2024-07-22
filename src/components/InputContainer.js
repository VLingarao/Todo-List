import React, { useState } from "react";
import "../App.css"

export default function InputContainer({ addNewTodo }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="maininput">
      <input className="input"
        placeholder="Add an Item"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <button className="button"
        onClick={() => {
          addNewTodo(inputValue);
          setInputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
}
