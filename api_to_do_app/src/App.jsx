import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("Getting data:", response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const arr = data.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="app">
        <table>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
          {arr}
        </table>
      </div>
    </>
  );
}

export default App;
