import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-5">
      <h1>
        <NavLink to="/">Olga</NavLink>
      </h1>
      <nav className="flex space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline" : "hover:underline"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline" : "hover:underline"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline" : "hover:underline"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-500 underline" : "hover:underline"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
