import React from "react";
import { useContext } from "react";
import { ContextApiFunTodo } from "../Store/Contect_Api_todo";
import TodoShowItesm from "./TodoShowItesm";
const AddTodoItems = () => {
  const {todoItemsList} = useContext(ContextApiFunTodo);
  return (
    <div>
      {todoItemsList.map((items, index) => (
        <TodoShowItesm
          task={items.task}
          date={items.date}
          key={index}
        ></TodoShowItesm>
      ))}
    </div>
  );
};

export default AddTodoItems;
