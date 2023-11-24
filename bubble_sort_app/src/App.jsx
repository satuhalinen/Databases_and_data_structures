import { useState } from "react";

function App() {
  const [arr, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const bubbleSort = () => {
    if (arr != "") {
      let feed = arr.split(",");
      let food = feed.map(Number);
      for (let i = food.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
          if (food[j] > food[j + 1]) {
            let temp = food[j];
            food[j] = food[j + 1];
            food[j + 1] = temp;
          }
        }
      }
      return food.toString();
    }
  };
  return (
    <>
      <h1>Bubble sort app</h1>
      <input type="text" onChange={searchHandler} />
      <p>{bubbleSort()}</p>
    </>
  );
}

export default App;
