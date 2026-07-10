import Button from "../ui/Button";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[72px] flex flex-col justify-center items-start w-full p-8 md:p-16 lg:p-24 bg-brand-cream text-brand-charcoal space-y-8"
    >
      <div>
        <h2 className="text-4xl text-brand-charcoal inline-block">About Me</h2>
        <div className="h-1 w-[60px] bg-brand-orange"></div>

        <div className="flex flex-col lg:flex-row items-start lg:space-x-8 space-y-8 lg:space-y-0 mt-8 gap-10">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <img
              src="/IMG_4839.webp"
              alt="Olga Minaieva, front-end developer"
              width="768"
              height="1024"
              loading="lazy"
              decoding="async"
              className="w-3/4 sm:w-64 h-64 rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Description */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-xl leading-relaxed mb-6">
              I&apos;m a frontend engineer based in Toronto, Canada, focused on
              building responsive, interactive web applications with React,
              TypeScript, Next.js, and Tailwind CSS. I enjoy turning complex
              requirements into accessible interfaces, reusable components, and
              maintainable application architecture.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              My experience includes API integration, authentication,
              server-side rendering, and collaborative delivery through pull
              requests and code reviews. A customer-service background has
              strengthened my communication, ownership, and problem-solving
              skills—qualities I bring to both the product and the team behind
              it.
            </p>

            <Button
              href="/Olga_Minaieva_Frontend_CV.pdf"
              download="Olga_Minaieva_Frontend_CV.pdf"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
