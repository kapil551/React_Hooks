import React, { useEffect, useState } from 'react';

function UseEffectConditionallyRunEffects() {
    
    const [count, setCount] = useState(0);
    const[name, setName] = useState('');

    // Condionally run effects
    // the useEffect callback function is called after the first render and every time after the component re-renders 
    // condionally only when the count state updates
    // This useEffect hook --> componentDidMount + componentDidUpdate combined together.
    useEffect(
      // callback function
      () => {
          console.log('useffect', 'count is updated');
          document.title = `You clicked ${count} times`;
      }, [count] // optional dependency list
    );
  
    return (
      <div>
          { console.log('render') }
        <button onClick={() => setCount(count + 1)}> Click {count} times</button>
        <input type="text" value={name} onChange={(event) => {
            setName(event.target.value);
        }}/>
        <h2> {name} </h2>
      </div>
    );
}

export default UseEffectConditionallyRunEffects;
