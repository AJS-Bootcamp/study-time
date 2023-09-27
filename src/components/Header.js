import Navigation from "./Navigation";
import LogoAJS from "../app/assets/img/lightAJS.png";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <div className="header">
      <ul>
        <Navbar dark color="primary" sticky="top" expand="md">
          <NavbarBrand className="ms-5" href="/">
            <img src={LogoAJS} alt="team logo" className="float-start" />
            <h1 className="mt-1">Study Time</h1>
          </NavbarBrand>
          <div>
            <Navigation />
          </div>
        </Navbar>
      </ul>
    </div>
  );
}

export default Header;

