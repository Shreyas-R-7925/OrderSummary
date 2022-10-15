import React, { useState } from "react";

function Incrementer() {
  const [count, setCount] = useState(0);

  function decrement() { 
    if(count > 0)      // because quantity cannot be negative
      setCount(count - 1); 
  }

  function increment() {
    setCount(count + 1);
  }  

  var m = 90000;
  return (
    <div>
      <button className="btn" onClick={decrement}>-</button>
      <p className="inc_dec">{count}</p>
      <button className="btn" onClick={increment}>+</button> 
      <p className="comp"><b>Cost : </b>{count*m}</p>
    </div>
  );
} 
export default Incrementer; 
