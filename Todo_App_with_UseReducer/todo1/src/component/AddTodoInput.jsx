import { useState } from "react";
import { SiAddthis } from "react-icons/si";
import { useContext } from "react";
import { creactContextTodoItems } from "./store/ContextApiStore";

const AddTodoInput = () => {
  const { handelNewItems } = useContext(creactContextTodoItems);
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const handelInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const handelDateValue = (event) => {
    setDateValue(event.target.value);
  };
  return (
    <div className="container">
      <div className="row mx-5 mt-4">
        <div className="col-lg-5">
          <input
            type="text"
            placeholder="Enter Task"
            value={inputValue}
            onChange={handelInputValue}
          />
        </div>
        <div className="col-lg-4">
          <input
            type="date"
            name=""
            id=""
            value={dateValue}
            onChange={handelDateValue}
          />
        </div>
        <div className="col-lg-1 mt-1 btn bg-success ms-5">
          <SiAddthis onClick={() => handelNewItems(inputValue, dateValue)} />
        </div>
      </div>
    </div>
  );
};

export default AddTodoInput;
