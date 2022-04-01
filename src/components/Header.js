import React from "react";
import header_image from "../images/bg-header-desktop.svg";
import "../App.css";

const Header = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={header_image} className="" alt="logo" />
        </header>
      </div>
    </div>
  );
};

export default Header;
