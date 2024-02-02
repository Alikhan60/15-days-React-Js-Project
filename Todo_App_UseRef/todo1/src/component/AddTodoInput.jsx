import { useRef } from "react";
import { SiAddthis } from "react-icons/si";
const AddTodoInput = ({ handelNewItems }) => {
  const inputValueElement = useRef("");
  const dateValueElement = useRef("");

  const handelButton = () => {
    const inputValue = inputValueElement.current.value;
    const dateValue = dateValueElement.current.value;
    inputValueElement.current.value = "";
    dateValueElement.current.value = "";
    handelNewItems(inputValue, dateValue);
  };
  return (
    <div className="container">
      <div className="row mx-5 mt-4">
        <div className="col-lg-5">
          <input type="text" placeholder="Enter Task" ref={inputValueElement} />
        </div>
        <div className="col-lg-4">
          <input type="date" name="" id="" ref={dateValueElement} />
        </div>
        <div className="col-lg-1 mt-1 btn bg-success ms-5">
          <SiAddthis onClick={handelButton} />
        </div>
      </div>
    </div>
  );
};

export default AddTodoInput;
