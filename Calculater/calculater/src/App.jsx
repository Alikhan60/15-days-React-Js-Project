import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const handelButton = (buttonName) => {
    if (buttonName === "C") {
      setInputValue("");
    } else if (buttonName === "=") {
      let calculateValue = eval(inputValue);
      setInputValue(calculateValue);
    } else {
      let display = inputValue + buttonName;
      setInputValue(display);
    }
  };
  {
    return (
      <div className="container">
        <div className="calculater">
          <Display inputValue={inputValue}></Display>
          <Buttons handelButton={handelButton}></Buttons>
        </div>
      </div>
    );
  }
};
export default App;
