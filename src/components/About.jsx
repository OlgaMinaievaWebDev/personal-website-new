import Button from "../ui/Button";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-[72px] bg-brand-cream px-8 py-16 text-brand-charcoal md:px-16 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 id="about-heading" className="text-4xl font-semibold">
          About Me
        </h2>
        <div className="mt-2 h-1 w-[60px] bg-brand-orange" />

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(260px,0.75fr)_1.5fr] lg:gap-16">
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <img
              src="/IMG_4839.webp"
              alt="Olga Minaieva, frontend engineer"
              width="768"
              height="960"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-2xl object-cover object-center shadow-lg"
            />
          </div>

          <div className="max-w-3xl">
            <p className="text-xl font-medium leading-relaxed md:text-2xl">
              I&apos;m a Toronto-based frontend engineer who enjoys turning
              complex ideas into clear, accessible digital experiences.
            </p>
            <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
              My recent work includes leading a three-person team on an OpenAPI
              playground, building authentication and API integrations, and
              creating reusable interfaces with React, Next.js, and TypeScript.
              I bring a collaborative mindset, strong communication, and care
              for the details that make products easier to use.
            </p>

            <div className="mt-7">
              <Button
                href="/Olga_Minaieva_Frontend_CV.pdf"
                download="Olga_Minaieva_Frontend_CV.pdf"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
