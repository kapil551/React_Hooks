import React, { useState } from 'react';

function UseStateHookWithPreviousState() {

    const [count, setCount] = useState(0);

    const decrementCount = () => {

        if(count > 0) {

            setCount(count - 1);
        }
    }

    const incrementCount = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    // // This is wrong --> It will increment the count by one only
    // const incrementByFive = () => {
    //     for(let i = 1; i<= 5; i++) {
    //         setCount(count + 1);
    //     }
    // }

    // Correct way to increment the count by five --> is by keeping track of the previous value
    const incrementByFive = () => {
        for(let i = 1; i<= 5; i++) {

            // correct way is to pass in a function that has access to the old value
            // and increments that old value by one 
            setCount((previousCount) => previousCount + 1
            );
        }
    }

    return (
    <div>
        <button onClick={resetCount}> reset count </button>
        <div>count {count} </div>
        <button onClick={decrementCount}> - </button>
        <button onClick={incrementCount}> + </button>
        <button onClick={incrementByFive}>+5</button>
    </div>
    );
}

export default UseStateHookWithPreviousState;
