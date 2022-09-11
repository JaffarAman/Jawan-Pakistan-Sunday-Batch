import React from "react";
import { useState } from "react";

import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
const Todo = () => {
  const [todoItem, setTodoItem] = useState([14]);
  const [inputValue, setinputValue] = useState("");
  const [indexNumber, setIndexNumber] = useState("");
  const [updateInput, setupdateInput] = useState("");

  console.log(indexNumber, "indexNumber");
  const addTodo = () => {
    todoItem.push(inputValue);

    setTodoItem([...todoItem]);
    setinputValue("");
  };

  const deleteAll = () => {
    setTodoItem([]);
  };

  const deleteTodo = (ind) => {
    console.log("delete todo", ind);
    todoItem.splice(ind, 1);
    setTodoItem([...todoItem]);
  };

  const updateTodo = (ind) => {
    todoItem.splice(ind, 1, updateInput);
    setTodoItem([...todoItem]);
    setIndexNumber("");
    setupdateInput("");
  };

  const editTodo = (ind) => {
    setupdateInput(todoItem[ind]);
  };

  return (
    <div>
      <h1 className="bg-dark text-white text-center p-4">TODO APP</h1>

      <div className="mt-5 px-4">
        <input
          type="text"
          className="form-group form-control"
          placeholder="ENTER TODO"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <div className="mt-3 d-flex gap-3">
          <button className="btn btn-primary" onClick={addTodo}>
            ADD TODO
          </button>
          <button className="btn btn-danger" onClick={deleteAll}>
            DELETE TODO
          </button>
        </div>
      </div>

      <section className="mt-5 px-4">
        {todoItem.map((todo, ind) => {
          return (
            <React.Fragment key={ind}>
              {indexNumber === ind ? (
                <div>
                  <input
                    onChange={(e) => setupdateInput(e.target.value)}
                    className="form-control form-group my-3"
                    value={updateInput}
                    autoFocus
                  />
                  <button
                    onClick={() => updateTodo(ind)}
                    className="btn btn-primary my-2"
                  >
                    UPDATE
                  </button>
                </div>
              ) : (
                <div className="alert alert-primary d-flex justify-content-between">
                  {todo}
                  <div className="d-flex gap-2">
                    <AiFillDelete
                      color="black"
                      className="icon"
                      onClick={() => deleteTodo(ind)}
                      size={25}
                    />
                    <BiEditAlt
                      color="black"
                      className="icon"
                      onClick={() => {
                        setIndexNumber(ind);
                        editTodo(ind);
                      }}
                      size={25}
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

export default Todo;
