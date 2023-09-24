import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todo">To Do</NavLink>
        </li>
        <li>
          <NavLink to="/study">Study</NavLink>
        </li>
        <li>
          <NavLink to="/ContactPage">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
