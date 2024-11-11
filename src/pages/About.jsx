function About() {
  return (
    <section className="py-16 bg-gradient-to-b from-background-light to-background-dark text-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-highlight animate-fade-in">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-6 lg:space-y-0 animate-slide-in">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <img
              src="/path/to/profile-pic.jpg"
              alt="Profile"
              className="rounded-full w-40 h-40 lg:w-48 lg:h-48 shadow-lg border-4 border-highlight"
            />
          </div>

          {/* Description */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-lg leading-relaxed mb-4">
              I’m a self-taught web developer passionate about creating{" "}
              <span className="text-accent font-semibold">
                user-centered applications
              </span>
              . With skills in JavaScript, HTML, CSS, Tailwind, and React, I’m
              constantly learning and improving by building projects that bring
              ideas to life.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Pivoting into tech has opened up a future where I can pursue a
              career with purpose—developing applications that genuinely make a
              difference in people’s lives. I’m driven by the vision of crafting{" "}
              <span className="text-accent font-semibold">
                tools that bring value
              </span>
              , and I look forward to growing in this field to turn that vision
              into reality.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of coding, I enjoy an active lifestyle—whether it’s
              working out at the gym, exploring the outdoors, or playing the
              ukulele. I love meeting new people and creating memorable
              experiences along the way!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
