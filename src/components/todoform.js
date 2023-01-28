import React from 'react'
import { useEffect, useState } from "react";
import "../../src/App.css";
function Todoform({handle,setHandle}) {
  const [list, setList] = useState("");
  const onChange = (e) => {
    setList([e.target.value]);
  };

  const onClick = () => {
    if (list != "") {
      setHandle([...handle, list]);
    }
    setList("");
  };
    return (
      <div>
        <input
          id="input"
          name="text"
          value={list}
          placeholder="what are you doing?"
          onChange={onChange}
        />
        <button className="inputbtn" onClick={onClick}>
          Ekle
        </button>
      </div>
    );
}

export default Todoform
