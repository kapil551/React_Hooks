import React, { useEffect, useRef } from "react";

// I want to focus on the input tag, when the component first renders.

const UseRefHook = () => {

  const inputRef = useRef(null);

  useEffect(
    () => {

      // focus the input element
      inputRef.current.focus();

    }, []
  );

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRefHook;
