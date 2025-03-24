import ProfilePhoto from "../../public/IMG_4839.jpg";
import Button from "../ui/Button";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-start w-full p-8 md:p-16 lg:p-24 bg-gradient-to-r from-[#FF6F00] to-[#FF9100] text-white space-y-8"
    >
      <div>
        <h2 className="text-4xl text-white inline-block">About Me</h2>
        <div className="h-1 w-[60px] bg-white"></div>

        <div className="flex flex-col lg:flex-row items-start lg:space-x-8 space-y-8 lg:space-y-0 mt-8 gap-10">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <img
              src={ProfilePhoto}
              alt="Profile"
              className="w-3/4 sm:w-64 h-64 shadow-2xl object-cover"
            />
          </div>

          {/* Description */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-xl leading-relaxed mb-6">
              I'm a web developer based out of Orillia, CA. I love building apps
              that solve real-world problems, and that are delightful to use. My
              specialities include TypeScript, React JS, Tailwind CSS, and
              JavaScript.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              With a background in management and guest services at a casino industry, I’ve honed strong communication and problem-solving skills,
              ensuring an exceptional experience for clients and a
              high-performing team.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Outside of coding, I enjoy an active lifestyle—whether it’s
              working out at the gym, exploring the outdoors, or playing the
              ukulele. I love meeting new people and creating memorable
              experiences along the way!
            </p>

            <Button>Download CV</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
