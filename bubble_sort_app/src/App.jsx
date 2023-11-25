import { useState } from "react";
import "./App.css";

function App() {
  const [arr, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const bubbleSort = () => {
    if (arr != "") {
      let feed = arr.split(",");
      let food = feed.map(Number);
      if (!food.includes(NaN)) {
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
      } else {
        return "Please give numbers separated by commas.";
      }
    }
  };
  return (
    <>
      <div className="bubbleSortPicture">
        <h1>Bubble sort app</h1>
        <input type="text" onChange={searchHandler} />
        <p>{bubbleSort()}</p>
      </div>
    </>
  );
}

export default App;
