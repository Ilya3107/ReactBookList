import React from "react";

function MyInput({ todo, setTodo, todoInput }) {
  return (
    <div
      className={
        todoInput ? "input__body input__open" : "input__body input__closed"
      }
    >
      <div className="input__item">
        <input
          className="input__todo "
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
          type="text"
          placeholder="Введите предстоящую задачу"
        />
      </div>
    </div>
  );
}

export default MyInput;
