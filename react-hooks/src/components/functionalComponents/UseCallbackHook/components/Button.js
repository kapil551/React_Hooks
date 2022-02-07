import React from 'react';

const Button = ({ handleClick, children }) => {

    console.log('Rendering button -',children);

    return (
        <button onClick={handleClick}>
            { children }
        </button>
    );
};

export default React.memo(Button); // this will prevent a functional component from being re-rendered if it's props or state do not change.
