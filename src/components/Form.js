import React from "react";
import "../styles/form.scss";

export default function Form({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandleer = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  return (
    <div className="input_area">
      <form className="form">
        <label>
          <h2>Adj hozzá új teendőket</h2>
        </label>
        <div className="todo-add">
          <input
            type="text"
            placeholder="Todo..todo..todo todo todo todo todooo"
            onChange={inputTextHandleer}
            value={inputText}
          />
          <button onClick={submitTodoHandler}>
            <div />
            <div />
          </button>
        </div>
      </form>
    </div>
  );
}
