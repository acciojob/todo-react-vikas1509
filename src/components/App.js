import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [todo, settodo] = useState([]);
  const [text, settext] = useState('');

  function addToDo() {
    if (text.trim() !== '') {
      settodo([...todo, text]);
      settext("");
    }
  }

  function DeleteToDo(index) {
    const newSetToDo = todo.filter((_, i) => i !== index);
    settodo(newSetToDo);
  }

  return (
    <div>
      <h1>To-Do App</h1>
      <input type="text" value={text} onChange={(e) => settext(e.target.value)} placeholder="Enter a new Task" />
      <button onClick={addToDo}>Add</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => DeleteToDo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;

