import { useState } from "react";

export default function App() {
  const [count, useCount] = useState(0);
  function handleIncrement() {
    useCount(prevCount => prevCount + 1);
  }

  function handleDecrement() {
    useCount(function (prevCount) {
      if (prevCount == 0) {
        return 0;
      }
      return prevCount - 1;
    });
  }

  return (
    <main>
      <h1>Counter</h1>
      <div>
        <h2 className="count">{ count }</h2>
        <button onClick={handleIncrement} className="increment">Increment</button>
        <button onClick={handleDecrement} className="decrement">Decrement</button>
      </div>
    </main>
  )
}
