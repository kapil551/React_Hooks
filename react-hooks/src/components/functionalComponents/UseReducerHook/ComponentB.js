import React from "react";
import ComponentD from "./ComponentD";

const ComponentB = () => {
  return (
    <div style={{ border: '2px solid green', padding: "5px" }}>
      Component B
      <ComponentD />
    </div>
  );
};

export default ComponentB;
