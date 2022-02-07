import React, { useState } from 'react';
import Button from './components/Button';
import Count from './components/Count';
import Title from './components/Title';

const ParentComponent = () => {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = () => {
        setAge((previousAge) => previousAge + 1);
    }

    const incrementSalary = () => {
        setSalary((previousSalary) => previousSalary + 1000);
    }
    
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
