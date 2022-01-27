import React, { useEffect, useState } from "react";

function UseEffectAfterRender() {

  const [count, setCount] = useState(0);

  // the useEffect callback function is called after the first render and after every time after the component re-renders.
  // This useEffect hook --> componentDidMount + componentDidUpdate combined together.
  useEffect(
    // callback function
    () => {
        console.log('useffect');
        document.title = `You clicked ${count} times`;
    }, // optional dependency list
  );

  return (
    <div>
        { console.log('render') }
      <button onClick={() => setCount(count + 1)}> Click {count} times</button>
    </div>
  );
}

export default UseEffectAfterRender;
