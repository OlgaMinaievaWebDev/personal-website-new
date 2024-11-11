import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/public/Olga-Logo.webp";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-5 bg-background/80 text-textPrimary shadow-md backdrop-blur-md z-50">
      {/* Logo Section */}
      <NavLink to="/" className="flex items-center space-x-2">
        <img
          src={Logo}
          alt="Olga Minaieva Logo"
          className="h-12 transition-transform transform hover:scale-110"
        />
        {/* <span className="text-2xl font-bold tracking-wide hover:text-highlight">
          Olga Minaieva
        </span> */}
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-highlight font-semibold underline underline-offset-4"
              : "hover:text-accent transition-colors duration-200 ease-in-out"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-highlight font-semibold underline underline-offset-4"
              : "hover:text-accent transition-colors duration-200 ease-in-out"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-highlight font-semibold underline underline-offset-4"
              : "hover:text-accent transition-colors duration-200 ease-in-out"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "text-highlight font-semibold underline underline-offset-4"
              : "hover:text-accent transition-colors duration-200 ease-in-out"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-highlight font-semibold underline underline-offset-4"
              : "hover:text-accent transition-colors duration-200 ease-in-out"
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-textPrimary text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-full bg-background/90 p-5 space-y-4 shadow-lg sm:hidden flex flex-col items-center backdrop-blur-md z-40">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "text-highlight font-semibold underline underline-offset-4"
                : "hover:text-accent transition-colors duration-200 ease-in-out"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "text-highlight font-semibold underline underline-offset-4"
                : "hover:text-accent transition-colors duration-200 ease-in-out"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "text-highlight font-semibold underline underline-offset-4"
                : "hover:text-accent transition-colors duration-200 ease-in-out"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "text-highlight font-semibold underline underline-offset-4"
                : "hover:text-accent transition-colors duration-200 ease-in-out"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "text-highlight font-semibold underline underline-offset-4"
                : "hover:text-accent transition-colors duration-200 ease-in-out"
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
