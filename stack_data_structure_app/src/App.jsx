import "./App.css";
import { useState } from "react";
function App() {
  const [stack, setStack] = useState([1, 2, 3]);
  const addBoxHandler = () => {
    let stackCopy = [...stack];
    stackCopy.push(stack.length + 1);
    setStack(stackCopy);
  };
  const listItems = stack.map((number) => <div>{number}</div>);

  return (
    <>
      <h1>Stack data structure app</h1>
      {listItems}
      <button className="blueButton" onClick={addBoxHandler}></button>
      <button className="yellowButton"></button>
      <button className="redButton"></button>
      <button className="removeButton"></button>
    </>
  );
}

export default App;
