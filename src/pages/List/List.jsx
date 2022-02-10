import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";

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
  const { cartItems, setCartItems } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="list">
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              {item.name} <button onClick={() => setCartItems([...cartItems, item])}>Añadir</button>
            </li>);
        })}
      </ul>
      {theme}
    </div>
  );
};

export default List;