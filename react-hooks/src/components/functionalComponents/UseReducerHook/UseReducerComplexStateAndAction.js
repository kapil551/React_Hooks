import React, { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

// reducer function
const reducer = (currentState, action) => {
    
    switch(action.type) {
        case 'increment':
            return { ...currentState, firstCounter: currentState.firstCounter + action.value }
        case 'decrement':
            return { ...currentState, firstCounter: currentState.firstCounter - action.value }
        case 'increment2':
            return { ...currentState, secondCounter: currentState.secondCounter + action.value }
        case 'decrement2':
            return { ...currentState, secondCounter: currentState.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

const UseReducerComplexStateAndAction = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        
        <div>
            <div> First Counter : {count.firstCounter}</div>
            <div> Second Couter : {count.secondCounter}</div>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}> Increment Frist Counter</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement Frist Counter</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}> Increment 5 Frist Counter</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5 Frist Counter</button>
            
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}> Increment Second Counter</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Second Counter</button>
            <button onClick={() => dispatch({ type: 'increment2', value: 5 })}> Increment 5 Second Counter</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement 5 Second Counter</button>
            
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default UseReducerComplexStateAndAction;
