import React, { useState } from "react";

function Counter({ value }) {
  const [counter, setCounter] = useState(value);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      {counter}
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;


Counter.defaultProps = {
    value: 0
}