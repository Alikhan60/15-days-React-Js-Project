import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import AddTodoInput from "./component/AddTodoInput";
import AddTodoItems from "./component/AddTodoItems";
import WraperTodoItemsContext from "./component/store/ContextApiStore";

const App = () => {
  return (
    <WraperTodoItemsContext>
      <center>
        <AppName></AppName>
        <AddTodoInput></AddTodoInput>
        <AddTodoItems></AddTodoItems>
      </center>
    </WraperTodoItemsContext>
  );
};

export default App;
