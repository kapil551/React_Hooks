import React, { useContext } from "react";
import { CountContext } from "./UseReducerWithUseContext";

const ComponentA = () => {
  const countContext = useContext(CountContext);
  return (
    <div style={{ border: '2px solid red', padding: "5px" }}>
      Component A : { countContext.countState }
      <br />
      <button onClick={() => countContext.countDispatch("increment")}> Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentA;
