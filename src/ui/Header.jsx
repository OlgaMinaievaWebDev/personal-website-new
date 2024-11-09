import { NavLink } from "react-router-dom";
import Logo from "/public/Olga-Logo.webp";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-background text-textPrimary">
      <h1 className="text-2xl font-bold mb-2 hover:text-highlight">
        <NavLink to="/">
          <img src={Logo} alt="" className="h-16 mb-2" />
        </NavLink>
      </h1>

      <nav className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-highlight underline" : "hover:text-accent"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-highlight underline" : "hover:text-accent"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-highlight underline" : "hover:text-accent"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-highlight underline" : "hover:text-accent"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-highlight underline" : "hover:text-accent"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
