import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <button onClick={decrement}>Decrement</button>
        <span>{count}</span>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
