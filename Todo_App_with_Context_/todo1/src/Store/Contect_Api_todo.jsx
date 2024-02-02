import { createContext } from "react";
export const ContextApiFunTodo = createContext({
  todoItemsList: [],
  deleteItems: () => {},
  handelNewItems: () => {},
});
