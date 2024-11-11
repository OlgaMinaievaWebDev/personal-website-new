import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-background-light to-background-dark animate-fade-in-up">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Hello, I’m <span className="text-highlight">Olga Minaieva</span>
        </h1>
        <p className="text-lg mb-6 max-w-lg mx-auto">
          A passionate web developer specializing in building responsive and
          user-friendly web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <NavLink
            to="/projects"
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            View Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50"
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
