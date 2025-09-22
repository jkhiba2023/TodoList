import React, { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [task, setTask] = useState(getLocalStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //to check if the input field is empty or not.
    if (!content) return;

    //to check if the data is already existing or not.
    //if (task.includes(inputValue)) return;
    const isTodoItemPresent = task.find(
      (curTask) => curTask.content === content
    );
    if (isTodoItemPresent) return;

    setTask((prevTask) => [...prevTask, inputValue]);
  };

  setLocalStorageTodoData(task);

  const handleDeleteTodoItem = (value) => {
    const updateTask = task.filter((curTask) => curTask.content !== value);
    setTask(updateTask);
  };

  const handleCheckedTodoItem = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  const handleClearTodoItem = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandlerDeleteItem={handleDeleteTodoItem}
                onHandlerCheckedItem={handleCheckedTodoItem}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoItem}>
          Clear All
        </button>
      </section>
    </section>
  );
};
