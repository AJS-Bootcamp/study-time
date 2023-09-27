import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navbar">
      <div className="logo">AJS Logo</div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/ToDo">To Do</NavLink>
        </li>
        <li>
          <NavLink to="/Study">Study</NavLink>
        </li>
        <li>
          <NavLink to="/AboutPage">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/ContactPage">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
    // </div>
  );
}

export default Navigation;