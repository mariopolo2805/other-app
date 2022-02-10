import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { changeTheme } = useContext(ThemeContext);

  const handleShowCart = () => {
    setShowCart(!showCart);
  }

  return (
    <div className="header">
      <button onClick={() => changeTheme()}>Cambiar tema</button>
      <nav className="header">
        <Link to='/' >
          Home
        </Link>
        <Link to='/list' >
          List
        </Link>
      </nav>
      <button onClick={handleShowCart}>Show cart</button>
      {showCart &&
        <>
          Carrito items
          <ul>
            {cartItems.map((item, index) => (<li key={index}>{item.name}</li>))}
          </ul>
        </>}
    </div>
  );
};

export default Header;