import React from "react";
import Todo from "./Todo"

export default function List({todos,setTodos}) {
    return (
      <div className="list">
          <h2>Ezek a teendőid:</h2>
        <div className="todoList">
          {todos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
        </div>
      </div>
    );
}