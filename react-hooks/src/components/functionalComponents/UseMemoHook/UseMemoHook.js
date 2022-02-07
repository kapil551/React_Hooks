import React, { useState, useMemo } from "react";

const UseMemoHook = () => {

  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne((previousCountOne) => previousCountOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo((previousCountTwo) => previousCountTwo + 1);
  };

  // use cached value from the previous render
  const isEven = useMemo(() => {

    let i = 0;
    while(i < 2000000000) {
        i++
    }
    
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}> Count One : {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>

      <div>
        <button onClick={incrementTwo}> Count Two : {counterTwo}</button>
      </div>
    </div>
  );
};

export default UseMemoHook;
