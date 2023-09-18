import React from "react";
import header_image from "../images/bg-header-desktop.svg";
import "../App.css";
import Lists from "./Lists";
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={header_image} className="header-image" alt="logo" />
        </header>

        <Button variant="primary" >Primary</Button>
        <Lists />
      </div>
    </div>
  );
};

export default Header;
