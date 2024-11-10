import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I’m Olga Minaieva</h1>
        <p className="text-lg mb-6 max-w-lg mx-auto">
          A passionate web developer specializing in building responsive and
          user-friendly web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <NavLink
            to="/projects"
            className="px-6 py-3 bg-highlight text-background font-semibold rounded-md hover:bg-accent"
          >
            View Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-3 bg-accent text-background font-semibold rounded-md hover:bg-highlight"
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
