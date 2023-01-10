import React, { useEffect, useState } from "react";

import "./app.scss";
import Header from "./components/Header/Header";
import MyInput from "./components/Input/MyInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
  ////////////////////////////////Clock
  const [time, setTime] = useState(getTime());

  function getTime() {
    const date = new Date();
    const hours =
      date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    const minuts =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return { hours, minuts, seconds };
  }

  useEffect(() => {
    setInterval(() => {
      setTime(getTime());
    }, 1000);
    clearInterval();
  }, []);
  ////////////////////////////////Input
  const [todo, setTodo] = useState("");
  const [todoInput, setTodoInput] = useState(false);
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodoInput((todoInput) => true);
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
      setTodoInput((todoInput) => false);
    }
  };

  return (
    <div className="wrapper">
      <Header time={time} />
      <MyInput todo={todo} setTodo={setTodo} todoInput={todoInput} />
      {todos.length > 0 ? (
        <TodoList todos={todos} setTodos={setTodos} />
      ) : (
        <div className="null__element">Not tasks</div>
      )}
      <button className="add__button" onClick={addTodo}>
        <svg
          width={40}
          height={40}
          fill="none"
          stroke="#969696"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      </button>
    </div>
  );
}

export default App;
