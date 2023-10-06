import { NavLink } from "react-router-dom";


function Navigation() {
  return (
   <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="fs-4">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Study" className="fs-4">Study</NavLink>
          </li>
          <li>
            <NavLink to="/AboutPage" className="fs-4">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/ContactPage" className="fs-4">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;