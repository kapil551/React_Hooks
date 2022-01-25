import React, { useState } from 'react';

function UseStateHook() {

  // useState() hook
  /*
    The very first time the component renders a state variable is created and initialized with the default value of 0.

    The default value is never used on re-renders.

    When we click on the button the setCount method is called which will add one to the current count value, and the setCount method will cause the component to re-render.
  */
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }
  
  return (
    <div>
      <button onClick={incrementCount}> Count {count}</button>
    </div>
  );
}

export default UseStateHook;
