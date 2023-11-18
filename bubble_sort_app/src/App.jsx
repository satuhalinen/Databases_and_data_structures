import { useState } from "react";

function App() {
  const [arr, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const bubbleSort = () => {
    let feed = arr.split(",");
    for (let i = feed.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (feed[j] > feed[j + 1]) {
          let temp = feed[j];
          feed[j] = feed[j + 1];
          feed[j + 1] = temp;
        }
      }
    }
    return feed.toString();
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
