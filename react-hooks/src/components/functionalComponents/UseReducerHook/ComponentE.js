import React from "react";
import ComponentF from "./ComponentF";

const ComponentE = () => {
  return (
    <div style={{ border: '2px solid yellow', padding: "5px" }}>
      Component E
      <ComponentF />
    </div>
  );
};

export default ComponentE;
