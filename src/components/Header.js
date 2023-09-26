import Navigation from "./Navigation";
import LogoAJS from "../app/assets/img/lightAJS.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <Header className="header">
      <ul>
        <Navbar dark color="primary" sticky="top" expand="md">
          <NavbarBrand className="ms-5" href="/">
            <img src={LogoAJS} alt="team logo" className="float-start" />
            <h1 className="mt-1">Study Time </h1>
          </NavbarBrand>
          <div>
            <Navigation />
          </div>
        </Navbar>
      </ul>

      <div className="social-media">
        <a
          className="btn btn-social-icon btn-instagram"
          href="http://instagram.com/"
        >
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#E1306C" }} />
        </a>
        <a
          className="btn btn-social-icon btn-facebook"
          href="http://www.facebook.com/"
        >
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877F2" }} />
        </a>
        <a
          className="btn btn-social-icon btn-twitter"
          href="http://twitter.com/"
        >
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} />
        </a>
        <a
          className="btn btn-social-icon btn-google"
          href="http://youtube.com/"
        >
          <FontAwesomeIcon icon={faYoutube} style={{ color: "#FF0000" }} />
        </a>
      </div>
    </Header>
  );
}

export default Header;

// import { useState } from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   Collapse,
//   NavbarToggler,
//   Nav,
//   NavItem,
// } from "reactstrap";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <Navbar dark color="primary" sticky="top" expand="md">
//       <NavbarBrand className="ms-5" href="/">
//         <img src={LogoAJS} alt="team logo" className="float-start" />
//         <h1 className="mt-1">Study Time</h1>
//       </NavbarBrand>

//       <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
//       <Collapse isOpen={menuOpen} navbar>
//         <Nav className="ms-auto" navbar>
//           <NavItem>
//             <NavLink className="nav-link" to="/">
//               <i className="fa fa-home fa-lg" /> Home
//             </NavLink>
//           </NavItem>

//           <NavItem>
//             <NavLink className="nav-link" to="/ToDo">
//               <i className="fa fa-list fa-lg" /> To Do
//             </NavLink>
//           </NavItem>

//           <NavItem>
//             <NavLink className="nav-link" to="/Study">
//               <i className="fa fa-info fa-lg" /> Study
//             </NavLink>
//           </NavItem>

//           <NavItem>
//             <NavLink className="nav-link" to="/AboutPage">
//               <i className="fa fa-info fa-lg" /> About Us
//             </NavLink>
//           </NavItem>

//           <NavItem>
//             <NavLink className="nav-link" to="/ContactPage">
//               <i className="fa fa-address-card fa-lg" /> Contact Us
//             </NavLink>
//           </NavItem>
//         </Nav>
//       </Collapse>
//     </Navbar>
//   );
// };

// export default Header;
