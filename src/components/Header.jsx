import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Work", href: "#work", sectionId: "work" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "work", "contact"]
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
          <div className="flex items-center gap-1 sm:gap-2 md:gap-6 text-sm sm:text-base md:text-lg font-semibold">
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
        </nav>
      </header>
    </>
  );
}
export default Header;
