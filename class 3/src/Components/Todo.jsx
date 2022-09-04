import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [inputValue, setinputValue] = useState("");

  const addTodo = () => {
    todoItem.push(inputValue);

    setTodoItem([...todoItem]);
  };

  console.log(todoItem);

  return (
    <div>
      <h1 className="bg-dark text-white text-center p-4">TODO APP</h1>

      <div className="mt-5 px-4">
        <input
          type="text"
          className="form-group form-control"
          placeholder="ENTER TODO"
          //   value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <div className="mt-3 d-flex gap-3">
          <button className="btn btn-primary" onClick={addTodo}>
            ADD TODO
          </button>
          <button className="btn btn-danger">DELETE TODO</button>
        </div>
      </div>

      <section className="mt-5 px-4">
        {todoItem.map((todo, ind) => {
          return <div className="alert alert-primary">{todo}</div>;
        })}
      </section>
    </div>
  );
};

export default Todo;
