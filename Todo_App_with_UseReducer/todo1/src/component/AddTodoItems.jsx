import React, { useContext } from "react";
import TodoShowItesm from "./TodoShowItesm";
import { creactContextTodoItems } from "./store/ContextApiStore";
const AddTodoItems = () => {
  const { todoItemsList } = useContext(creactContextTodoItems);
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
