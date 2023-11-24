import { useState } from "react";
import "./App.css";
function App() {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const palindromeChecker = () => {
    let emptyAway = search.toLowerCase().replaceAll(" ", "");
    let toArray = emptyAway.split("");
    let toReverse = toArray.reverse();
    let palindrome = toReverse.join("");
    if (search == "") {
      return "";
    } else if (emptyAway == palindrome) {
      return "The given word/number/phrase is a palindrome.";
    } else {
      return "The given word/number/phrase is not a palindrome.";
    }
  };

  return (
    <>
      <div className="palindromePicture">
        <p>Welcome to use palindrome checker app!</p>
        <input type="text" onChange={searchHandler} />
        <p>{palindromeChecker()}</p>
      </div>
    </>
  );
}

export default App;
