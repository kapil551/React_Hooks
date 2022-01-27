import React, { useEffect, useState } from 'react';

function UseEffectRunEffectsOnlyOnce() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const mousePositionHandler = (event) => {
        console.log("Mouse Event");

        setX(event.clientX);
        setY(event.clientY);
    }

    //Run effects omly once
    // the useEffect callback function is called only after the first render and never called every time after the component re-renders 
    // This useEffect hook --> componentDidMount only
    useEffect(
        () => {
            console.log('useEffect is called');

            window.addEventListener('mousemove', mousePositionHandler);
        }, [] // empty dependency list
    )

  return <div>
      Hooks X - {x} Y - {y}

  </div>;
}

export default UseEffectRunEffectsOnlyOnce;
