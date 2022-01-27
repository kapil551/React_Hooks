import React, { useEffect, useState } from "react";

function UseEffectWithIncorrectDependency() {
  
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((previousCount) => previousCount + 1);
    // setCount(count + 1);
  };

  // call the effect only once
  useEffect(() => {
    console.log("useEffect is called");

    const interval = setInterval(tick, 2000);

    // cleanup --> componentWillUnmount
    return () => {
      console.log("component is unmounting");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {console.log("render")}
      <div>
          {count}
       </div>
    </>
  );
}

export default UseEffectWithIncorrectDependency;
