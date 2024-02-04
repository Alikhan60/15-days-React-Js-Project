import { useReducer } from "react";
import { createContext } from "react";
export const creactContextTodoItems = createContext({
  todoItemsList: [],
  handelNewItems: () => {},
  deleteItems: () => {},
});
const usereducerTodoFun = (currentState, action) => {
  let newtodoItemsState = currentState;
  if (action.type === "NEW_ITEMS") {
    newtodoItemsState = [
      ...currentState,
      { task: action.payload.task, date: action.payload.date },
    ];
  } else if (action.type === "DEL_ITEMS") {
    newtodoItemsState = currentState.filter(
      (items) =>
        items.task !== action.payload.task && items.date !== action.payload.date
    );
  }
  return newtodoItemsState;
};
const WraperTodoItemsContext = ({ children }) => {
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
  const [todoItemsList, dispatchTodoItems] = useReducer(
    usereducerTodoFun,
    intialValue
  );
  const handelNewItems = (task, date) => {
    const addnewItemsObj = {
      type: "NEW_ITEMS",
      payload: { task, date },
    };
    dispatchTodoItems(addnewItemsObj);
  };

  const deleteItems = (task, date) => {
    const deleteItemsObj = {
      type: "DEL_ITEMS",
      payload: { task, date },
    };
    dispatchTodoItems(deleteItemsObj);
  };
  return (
    <creactContextTodoItems.Provider
      value={{ todoItemsList, handelNewItems, deleteItems }}
    >
      {children}
    </creactContextTodoItems.Provider>
  );
};
export default WraperTodoItemsContext;
