import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter component mounted");
  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>
    </div>
  );
}

// Every component that is created, and intended to be used elsewhere, it needs a export
export default Counter;
