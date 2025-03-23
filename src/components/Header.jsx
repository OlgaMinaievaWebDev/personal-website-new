function Header() {
  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-80 shadow-lg z-10">
      <nav className="flex justify-end items-center p-4 gap-12 text-xl font-semibold mr-10 h-[72px]">
        <a
          href="#work"
          className="text-gray-800 hover:text-[#FF6F00] transition-all duration-300 ease-in-out"
        >
          Work
        </a>
        <a
          href="#about"
          className="text-gray-800 hover:text-[#FF6F00] transition-all duration-300 ease-in-out"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-gray-800 hover:text-[#FF6F00] transition-all duration-300 ease-in-out"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
export default Header