import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const palindromeChecker = () => {
    let toArray = search.split("");
    let toReverse = toArray.reverse();
    let palindrome = toReverse.join("");
    if (search == "") {
      return "";
    } else if (search == palindrome) {
      return "is palindrome";
    } else {
      return "is not palidrome";
    }
  };

  return (
    <>
      <p>This is a palindrome checker app.</p>
      <input type="text" onChange={searchHandler} />
      <p>{palindromeChecker()}</p>
    </>
  );
}

export default App;
