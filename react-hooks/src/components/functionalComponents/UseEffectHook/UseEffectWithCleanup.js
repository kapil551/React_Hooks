import React, { useEffect, useState } from "react";
import UseEffectRunEffectsOnlyOnce from "./UseEffectRunEffectsOnlyOnce";

function UseEffectWithCleanup() {
  const [display, setDisplay] = useState(true);

  const toggleDdisplayHandler = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <button onClick={toggleDdisplayHandler}>Toggle display</button>
      { display && <UseEffectRunEffectsOnlyOnce /> }
    </div>
  );
}

export default UseEffectWithCleanup;
