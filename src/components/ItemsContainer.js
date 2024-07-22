import React from "react";
import "../App.css"

export default function ItemsContainer({ todos, deleteTodo }) {
  return (
    <div>
      <ul>
        {todos.map((item, index) => {
          return (
            <li className="list" key={index} style={{ marginTop: "10px" }}>
              {item}
              <button className="removebtn"
                style={{ marginLeft: "15px" }}
                onClick={() => deleteTodo(item)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
