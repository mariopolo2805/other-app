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

  const handleAddItem = (item) => {
    const found = cartItems.find(cartItem => cartItem.id === item.id);

    // Si no encuentro la fruta en el carrito
    if (!found) {
      // Me creo una primera fruta con count = 1
      const cartItem = {
        ...item,
        count: 1
      }
      // Añado la fruta al final del carrito
      setCartItems([...cartItems, cartItem]);
    } else {
      // En caso de ya existir la fruta en el carrito
      found.count++; // Aumento su count
      setCartItems([...cartItems]); // Me lo guardo en el carrito
    }
  }

  return (
    <div className="list">
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              {/* {item.name} <button onClick={() => setCartItems([...cartItems, item])}>Añadir</button> */}
              {item.name} <button onClick={() => handleAddItem(item)}>Añadir</button>
            </li>);
        })}
      </ul>
      {theme}
    </div>
  );
};

export default List;