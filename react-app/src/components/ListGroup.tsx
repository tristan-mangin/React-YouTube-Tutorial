// import { Fragment } from "react/jsx-runtime";

import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
	const [selectedIndex, setSelectedIndex] = useState(-1);
	// Hook
	// arr[0] --> variable (selectedIndex)
	// arr[1] --> updater function

	// Event handler function

  return (
    // <> = FRAGMENT --> So that you can return multiple elements
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null}  --> same as below*/}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </li> // list items should have key
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
