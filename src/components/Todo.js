import React from "react";
import remove from "../assets/icons/remove.svg";
import edit from "../assets/icons/edit.svg";
import check from "../assets/icons/check.svg";

export default function Todo({text,todo,todos,setTodos}){

const deleteHandler = () => {
  setTodos(todos.filter((element) => element.id !== todo.id))  
}

const completeHandler = () => {
    setTodos(todos.map(item => {
        if(item.id === todo.id){
            return {
                ...item, completed: true
            };
        }
        return item;
    }))
}

    return (
      <div className={`todo ${todo.completed ? "completed" : ""}`}>
        <span className="item">
          {text}
        </span>
        <img src={check} onClick={completeHandler} className="complete"/>
        <img src={edit} />         
        <img src={remove} onClick={deleteHandler} />         
      </div>
    );
}