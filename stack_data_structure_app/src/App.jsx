import "./App.css";
import { useState } from "react";
function App() {
  let color;
  const [stack, setStack] = useState([]);

  const addBlueBoxHandler = () => {
    let stackCopy = [...stack];
    color = "blue";
    stackCopy.push(color);
    setStack(stackCopy);
  };
  const addYellowBoxHandler = () => {
    let stackCopy = [...stack];
    color = "yellow";
    stackCopy.push(color);
    setStack(stackCopy);
  };
  const addRedBoxHandler = () => {
    let stackCopy = [...stack];
    color = "red";
    stackCopy.push(color);
    setStack(stackCopy);
  };

  const removeBoxHandler = () => {
    let stackCopy = [...stack];
    stackCopy.pop();
    setStack(stackCopy);
  };
  const listItems = stack
    .toReversed()
    .map((color) => <div className={color}>{color}</div>);

  return (
    <>
      <h1>Stack data structure app</h1>
      {listItems}
      <button className="blueButton" onClick={addBlueBoxHandler}></button>
      <button
        className="yellowButton"
        onClick={() => addYellowBoxHandler()}
      ></button>
      <button className="redButton" onClick={() => addRedBoxHandler()}></button>
      <button className="removeButton" onClick={removeBoxHandler}></button>
    </>
  );
}

export default App;
