import Navigation from "./Navigation";
import LogoAJS from "../app/assets/img/lightAJS.png";
import { Navbar, NavbarBrand } from "reactstrap";
import { useState } from "react";
import Motivation from "./Motivation";

function Header() {
  const [showText, setShowText] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setShowText(!showText);
  };

  return (
    <div className="header">
      <Navbar color="dark" dark sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          <img
            src={LogoAJS}
            alt="team logo"
            className="float-start"
            onClick={handleClick}
          />
          <h1 className="mt-1">Study Time</h1>
        </NavbarBrand>
        <div className="nav-container">
          {" "}
          <Navigation className="nav-link" />
        </div>
      </Navbar>
      <div
        className={`text-center bg-dark ${
          showText ? "show-text" : "hide-text"
        }`}
      >
        {/* <h8>
          AJS Determine to enhance your study skills and optimize your learning
          experience.
        </h8> */}
        <Motivation />
      </div>
    </div>
  );
}

export default Header;
