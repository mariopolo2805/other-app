import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(!showCart);
  }

  return (
    <div className="header">
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
        </>}
    </div>
  );
};

export default Header;