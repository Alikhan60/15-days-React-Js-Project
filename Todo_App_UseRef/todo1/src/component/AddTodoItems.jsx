import React from "react";
import TodoShowItesm from "./TodoShowItesm";
const AddTodoItems = ({ todoItemsList, deleteItems }) => {
  return (
    <div>
      {todoItemsList.map((items, index) => (
        <TodoShowItesm
          task={items.task}
          date={items.date}
          key={index}
          deleteItems={deleteItems}
        ></TodoShowItesm>
      ))}
    </div>
  );
};

export default AddTodoItems;
