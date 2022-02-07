import React from "react";
import ComponentE from "./ComponentE";

const ComponentC = () => {
  return (
    <div style={{ border: '2px solid purple', padding: "5px" }}>
      Component C
      <ComponentE />
    </div>
  );
};

export default ComponentC;
