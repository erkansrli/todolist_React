import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import "../../src/App.css";
function Todolist({ handle, setHandle }) {
  
  const checkControl = (index) => {
    console.log(index)
    const element = document.getElementById(`${index}`);
    element.classList.toggle("text-del");
  };
  
  const removeList = (index) => {
    let keep = handle[index];

    const newList = handle.filter((e) => e !== keep);
    // handle.splice(index, 1);
    setHandle(newList);
    console.log(newList);
  };
  return (
    <div>
      {handle.map((handle, index) => (
        <div className="list " key={index}>
          <p id={index} className="p">
            {handle}
          </p>

          <FaTrash className="trash" onClick={() => removeList(index)} />

          <FaCheck className="check" onClick={() => checkControl(index)} />
        </div>
      ))}
    </div>
  );
}

export default Todolist;
