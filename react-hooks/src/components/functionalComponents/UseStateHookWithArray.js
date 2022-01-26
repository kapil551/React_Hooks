import React, { useState } from "react";

function UseStateHookWithArray() {
  const [items, setItems] = useState([]); // default value is an empty array of objects

  const addItem = () => {

        // make a copy of all the items in the array using the spread operator, 
        // and to that list of copied items we simply append another object
      setItems([ ...items, {
          id: items.length,
          value: Math.floor(Math.random() * 10) + 1

      } ])
  }

  const deleteItem = () => {
      items.pop(); // pop the last item from the items array
      setItems([...items]); // make a copy of all the items in the array using the spread operator
  }

  return (
    <div>
        <button onClick={addItem}> Add Item to the Array </button>
        <button onClick={deleteItem}> Delete Item from Array </button>
        <ul>
            {items.map((item) => {
            return (
                <li key={item.id}>
                    {item.value}
                </li>
            );
            })}
        </ul>
        <h2> {JSON.stringify(items)} </h2>
    </div>
  );
}

export default UseStateHookWithArray;
