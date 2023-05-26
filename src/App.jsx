import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleAddName = () => {
    let newList = [...list];
    newList = [...list, text];
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
    setText("");
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("list");
    const storageList = JSON.parse(localStorageData);
    if (storageList) {
      setList(storageList);
    }
  }, []);

  return (
    <div>
      <h1>LocalStorage</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddName}>Agregar nombre</button>
      <ul>
        {list.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
