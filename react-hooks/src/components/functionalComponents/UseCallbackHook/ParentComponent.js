import React, { useCallback, useState } from 'react';
import Button from './components/Button';
import Count from './components/Count';
import Title from './components/Title';

const ParentComponent = () => {

    console.log("Rendering - Parent Component");

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    // A new incrementAge function is created every time the parent component re-renders.
    // const incrementAge = () => {
    //     setAge((previousAge) => previousAge + 1);
    // }

    // To memorized the callback function, we use useCallback hook
    const incrementAge = useCallback(() => {
        setAge((previousAge) => previousAge + 1);
    }, [age]);

    // A new incrementSalary function is created every time the parent component re-renders.
    // const incrementSalary = () => {
    //     setSalary((previousSalary) => previousSalary + 1000);
    // }

    // To memorized the callback function, we use useCallback hook
    const incrementSalary = useCallback(() => {
        setSalary((previousSalary) => previousSalary + 1000);
    }, [salary]);

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}> Increment Age </Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}> Increment Salary </Button>
        </div>
    );
};

export default ParentComponent;
