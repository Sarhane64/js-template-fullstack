import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <ul className="nav-ul-container">
        <li>
          <NavLink to="./">Home</NavLink>
        </li>
        <li>
          <NavLink to="./about">About</NavLink>
        </li>
        <li>
          <NavLink to="./menu">Post</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
