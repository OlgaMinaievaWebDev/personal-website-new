import Button from "../ui/Button";
function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-[72px] flex flex-col justify-center items-start w-full p-8 md:p-16 lg:p-24 min-h-screen bg-gradient-to-r from-hero-start to-hero-end text-white"
    >
      <p className="mb-3 text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-white/80">
        Frontend Engineer
      </p>
      <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold leading-tight tracking-wide">
        Olga Minaieva
      </h1>
      <h2 className="max-w-4xl mt-5 text-2xl md:text-4xl font-semibold leading-tight text-white">
        Building responsive, interactive web applications.
      </h2>
      <p className="max-w-2xl mt-5 text-lg md:text-xl font-light leading-relaxed text-white/90">
        Turning ideas into fast, accessible, and engaging digital experiences.
      </p>
      <ul
        className="flex flex-wrap gap-x-3 gap-y-2 mt-6 text-sm md:text-base font-semibold text-white/90"
        aria-label="Primary technologies"
      >
        {["React", "TypeScript", "Next.js"].map((technology, index) => (
          <li key={technology} className="flex items-center gap-3">
            {index > 0 && <span aria-hidden="true">•</span>}
            <span>{technology}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-4 mt-8">
        <Button href="#work">View My Work</Button>
        <Button href="#contact" variant="secondary">
          Contact Me
        </Button>
      </div>
    </section>
  );
}
export default Hero;
