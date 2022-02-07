import React from 'react';

const Count = ({ text, count }) => {

    console.log(`Rendering ${text}`);
    return <div>{text} - {count}</div>;
};

export default React.memo(Count); // this will prevent a functional component from being re-rendered if it's props or state do not change.
