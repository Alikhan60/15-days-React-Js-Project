import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Clock_Name from "./components/Clock_Name";
import Buttons from "./components/Buttons";
const App = () => {
  return (
    <center>
      <Clock_Name></Clock_Name>
      <Buttons></Buttons>
    </center>
  );
};

export default App;
