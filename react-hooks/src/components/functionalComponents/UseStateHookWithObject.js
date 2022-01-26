import React, { useState } from "react";

function UseStateHookWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(event) => {
            setName({
              ...name, // spread the name to also merge the previous state of the object with the currently updated state
              firstName: event.target.value,
              // copy every property in the name object and then just overwrite the firstName property with a different value.
            });
          }}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(event) => {
            setName({
              ...name, // spread the name to also merge the previous state of the object with the currently updated state
              lastName: event.target.value,
              // copy every property in the name object and then just overwrite the lastName property with a different value.
            });
          }}
        />

        <h2> Your first name is - {name.firstName} </h2>
        <h2> Your last name is - {name.lastName} </h2>
        <h2> {JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default UseStateHookWithObject;
