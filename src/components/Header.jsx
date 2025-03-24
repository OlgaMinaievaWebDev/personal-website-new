function Header() {
  return (
    <header className="fixed top-0 w-full bg-white bg-opacity-30 shadow-md z-10">
      <nav className="flex justify-end items-center p-4 gap-12 text-xl font-semibold mr-10 h-[72px]">
        <a
          href="#work"
          className="text-black hover:text-[#FF6F00] transition-all duration-300 ease-in-out"
        >
          Work
        </a>
        <a
          href="#about"
          className="text-black hover:text-[#FF6F00] transition-all duration-300 ease-in-out"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-black hover:text-[#FF6F00] transition-all duration-300 ease-in-out"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
export default Header