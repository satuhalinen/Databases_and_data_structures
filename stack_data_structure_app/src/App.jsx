import "./App.css";
import { useState } from "react";
function App() {
  let color;
  const [stack, setStack] = useState([]);

  const addBlueBoxHandler = () => {
    let stackCopy = [...stack];
    color = "blueRing";
    stackCopy.push(color);
    setStack(stackCopy);
  };
  const addYellowBoxHandler = () => {
    let stackCopy = [...stack];
    color = "yellowRing";
    stackCopy.push(color);
    setStack(stackCopy);
  };
  const addRedBoxHandler = () => {
    let stackCopy = [...stack];
    color = "redRing";
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
    .map((color) => <div className={color}></div>);

  return (
    <>
      <div className="all">
        <h1>Build a stack!</h1>
        <div className="withBg">
          <div className="rings">{listItems}</div>
          <div className="buttons">
            <button className="blueButton" onClick={addBlueBoxHandler}>
              Add a blue ring!
            </button>
            <button className="yellowButton" onClick={addYellowBoxHandler}>
              Add a yellow ring!
            </button>
            <button className="redButton" onClick={addRedBoxHandler}>
              Add a red ring!
            </button>
            <button className="removeButton" onClick={removeBoxHandler}>
              Remove a ring!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
