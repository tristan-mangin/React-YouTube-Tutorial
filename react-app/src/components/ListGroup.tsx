// import { Fragment } from "react/jsx-runtime";
import type { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

	// Event handler function
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // <> = FRAGMENT --> So that you can return multiple elements
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null}  --> same as below*/}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li> // list items should have key
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
