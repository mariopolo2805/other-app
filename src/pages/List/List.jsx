import React, { useState } from "react";

const itemsMock = [
  {
    id: 1,
    name: 'apple',
  },
  {
    id: 2,
    name: 'banana',
  },
  {
    id: 3,
    name: 'pear',
  },
  {
    id: 4,
    name: 'kiwi',
  },
];

const List = () => {
  const [items] = useState(itemsMock);

  return (
    <div className="list">
      <ul>
        {items.map(item => {
          return (
            <li>
              {item.name}
            </li>);
        })}
      </ul>
    </div>
  );
};

export default List;