import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center p-5">
      <h1>
        <NavLink to="/">Olga</NavLink>
      </h1>
      <nav className="flex space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
