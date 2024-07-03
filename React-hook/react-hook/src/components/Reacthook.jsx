import React, { useState } from 'react'


export default function Reacthook() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count)=>{
            return count + 1
        });
    }
       const decrement = () => {
            setCount((count)=>{
                return count - 1
            });
    }
    const reset = () => {
        setCount(0);
    }
    
  return (
    <>
      <h1>React Hook</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

    </>
  )
}
