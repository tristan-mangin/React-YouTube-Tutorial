// import { Fragment } from "react/jsx-runtime";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // Hook
  // arr[0] --> variable (selectedIndex)
  // arr[1] --> updater function

  // Event handler function

  return (
    // <> = FRAGMENT --> So that you can return multiple elements
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null}  --> same as below*/}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> // list items should have key
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
