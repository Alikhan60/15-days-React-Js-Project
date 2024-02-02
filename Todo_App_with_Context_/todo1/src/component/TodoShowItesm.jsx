import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { ContextApiFunTodo } from "../Store/Contect_Api_todo";
const TodoShowItesm = ({ task, date }) => {
  const { deleteItems } = useContext(ContextApiFunTodo);
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
