function Footer() {
  return (
    <footer className="bg-brand-charcoal px-8 py-6 text-white md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Olga Minaieva</p>

        <nav aria-label="Footer navigation">
          <ul className="flex gap-5 font-semibold">
            <li>
              <a
                href="https://github.com/OlgaMinaievaWebDev/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded transition-colors hover:text-brand-orange-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-light"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/olga-minaieva-370279154/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded transition-colors hover:text-brand-orange-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange-light"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
