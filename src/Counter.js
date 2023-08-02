import React, { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [num, setnum] = useState(0);

  // function increment() {
  //   setnum((a) => a + 1);
  // }

  const increment=()=>{
    setnum((a) => a + 1);
  }

  function decrement() {
    
    if (num <= 0) {
      setnum((a) => 0);
      window.alert("Value cannot be less than 0")
    }
    else
    setnum((a) => a - 1);
  }

  function reset() {
    setnum((a) => 0);
  }
  return (
    <>
      <div className="abc">
        <button onClick={() => decrement()}>-</button>
        {<h1>{num}</h1>}

        <button onClick={() => increment()}>+</button>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </>
  );
};
export default Counter;
