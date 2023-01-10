import React from "react";

function TodoList({ todos, setTodos }) {
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo.toString() !== text.toString();
    });

    setTodos(newTodos);
  };
  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <div className="todo" key={todo.toString()}>
          <li className="todo__item">{todo}</li>
          <button
            className="delete__button"
            onClick={() => {
              deleteTodo(todo);
            }}
          >
            <svg
              width={20}
              height={20}
              fill="none"
              stroke="#969696"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      ))}
    </ul>
  );
}
export default TodoList;
