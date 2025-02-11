import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "text-primary" : "")}
            to="/search"
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
