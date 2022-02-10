import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home">
      Home {theme}
    </div>
  );
};

export default Home;