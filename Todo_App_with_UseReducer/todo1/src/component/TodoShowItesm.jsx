import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { creactContextTodoItems } from "./store/ContextApiStore";
const TodoShowItesm = ({ task, date }) => {
  const { deleteItems } = useContext(creactContextTodoItems);
  return (
    <div className="row mx-5 mt-4">
      <div className="col-lg-5">{task}</div>
      <div className="col-lg-3">{date}</div>
      <div className="col-lg-2 mt-1 btn  bg-danger  delete">
        <MdDelete onClick={() => deleteItems(task, date)} />
      </div>
    </div>
  );
};

export default TodoShowItesm;
