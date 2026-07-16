import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navigationItems = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Work", href: "#work", sectionId: "work" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "work", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-72px 0px -45% 0px",
        threshold: [0.1, 0.3, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-2 z-50 -translate-y-20 rounded-md bg-brand-charcoal px-4 py-2 font-semibold text-white transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-orange-light"
      >
        Skip to content
      </a>
      <header className="fixed top-0 w-full bg-brand-cream/90 backdrop-blur-md shadow-sm z-10">
        <nav
          aria-label="Primary navigation"
          className="flex justify-between items-center px-3 sm:px-4 md:px-8 h-[72px]"
        >
          <a
            href="#hero"
            aria-current={activeSection === "hero" ? "page" : undefined}
            aria-label="Go to the top of Olga Minaieva's portfolio"
            className={`rounded-lg transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
              activeSection === "hero" ? "ring-2 ring-brand-orange" : ""
            }`}
          >
            <img
              src="/olga-monogram.webp"
              alt=""
              width="512"
              height="512"
              className="w-11 h-11 rounded-lg"
            />
          </a>
          <div className="hidden items-center gap-2 text-base font-semibold sm:flex md:gap-6 md:text-lg">
            {navigationItems.map(({ label, href, sectionId }) => {
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={sectionId}
                  href={href}
                  aria-current={isActive ? "location" : undefined}
                  className={`min-h-11 inline-flex items-center rounded-md px-2 sm:px-3 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                    isActive
                      ? "bg-brand-orange text-white"
                      : "text-brand-charcoal hover:bg-brand-peach hover:text-brand-orange-dark"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-xl text-brand-charcoal transition-colors hover:bg-brand-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange sm:hidden"
          >
            {isMenuOpen ? (
              <FaTimes aria-hidden="true" focusable="false" />
            ) : (
              <FaBars aria-hidden="true" focusable="false" />
            )}
          </button>
        </nav>
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-brand-peach bg-brand-cream px-4 py-3 shadow-lg sm:hidden"
          >
            <ul className="space-y-1">
              {navigationItems.map(({ label, href, sectionId }) => {
                const isActive = activeSection === sectionId;

                return (
                  <li key={sectionId}>
                    <a
                      href={href}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex min-h-11 items-center rounded-md px-3 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                        isActive
                          ? "bg-brand-orange text-white"
                          : "text-brand-charcoal hover:bg-brand-peach hover:text-brand-orange-dark"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
export default Header;
