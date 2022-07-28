import React, { useState, useEffect } from "react";

function Counter({ value }) {
  const [counter, setCounter] = useState(value);
  const [isDark, setColor] = useState("white");

   useEffect(() => {
     console.log("update counter")
   },[counter]);

   useEffect(() => {
    console.log("update color")
  },[isDark]);
   



  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div className="btnwraper mt-5" style={{backgroundColor: isDark ? "black" : "white"}}>
        <button onClick={decrement}>-</button>
        {counter}
        <button onClick={increment}>+</button>

        <button onClick={() => setColor(!isDark)}>modchng</button>

      </div>
     
    </div>
  );
}

export default Counter;


Counter.defaultProps = {
    value: 0
}