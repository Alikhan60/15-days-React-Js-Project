import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import AddTodoInput from "./component/AddTodoInput";
import AddTodoItems from "./component/AddTodoItems";
import { useState } from "react";
import { ContextApiFunTodo } from "./Store/Contect_Api_todo";

const App = () => {
  const intialValue = [
    {
      task: "React Js",
      date: "2/1/2024",
    },
    {
      task: "Node Js",
      date: "2/15/2024",
    },
    {
      task: "Expres Js",
      date: "2/13/2024",
    },
  ];
  const [todoItemsList, setTodoItemsList] = useState(intialValue);
  const handelNewItems = (task, date) => {
    const newItemsAdd = [...todoItemsList, { task: task, date: date }];
    setTodoItemsList(newItemsAdd);
  };
  const deleteItems = (task, date) => {
    let newItems = todoItemsList.filter(
      (items) => items.task !== task && items.date !== date
    );
    setTodoItemsList(newItems);
  };

  return (
    <ContextApiFunTodo.Provider
      value={{
        todoItemsList,
        deleteItems,
        handelNewItems,
      }}
    >
      <center>
        <AppName></AppName>
        <AddTodoInput></AddTodoInput>
        <AddTodoItems></AddTodoItems>
      </center>
    </ContextApiFunTodo.Provider>
  );
};

export default App;
