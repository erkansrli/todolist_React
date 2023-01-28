import "../src/App.css";
import { useEffect, useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import Helmet from "react-helmet";
import Todolist from "./components/todolist";
import Todoform from "./components/todoform";
function App() {
  const [handle, setHandle] = useState([]);

  return (
    <div className="App">
      <header className="header">
        <h1 id="navtitle"> ToDoList</h1>
      </header>
      <div className="section">
        <Todoform handle={handle} setHandle={setHandle} />
      </div>

      <div>
        <Todolist handle={handle} setHandle={setHandle} />
      </div>
      <Helmet>
        <style>{"body {background-color: rgb(236, 227, 227); }"}</style>
      </Helmet>
    </div>
  );
}

export default App;
